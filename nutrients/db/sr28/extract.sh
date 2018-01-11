#!/bin/bash

POSTGRES_HOST=postgres-usda
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_DATABASE=usda
ENCODING=SQL_ASCII
DELIMITER='^'
QUOTE='~'
NULL=

# if nc -h; then
#      until nc -z "$POSTGRES_HOST" "$POSTGRES_PORT"; do
#           echo "$(date) - waiting on postgre..."
#           sleep 1
#      done
# fi

copy() {
     SQL_COMMAND="SET client_encoding = '${ENCODING}'; COPY ( ${1} ) TO STDOUT;"
     COMMAND="psql -h "$POSTGRES_HOST" -p "$POSTGRES_PORT" -U "$POSTGRES_USER" -d "$POSTGRES_DATABASE" -x -v ON_ERROR_STOP=1 -c \"$SQL_COMMAND\" > \"/jsondata/${2}\""

     echo "running $COMMAND"

     docker run --rm -it \
                --link "$POSTGRES_HOST" \
               -v $(pwd)/jsondata:/jsondata:z \
               postgres /bin/bash -c "$COMMAND"
}

copy 'SELECT json_build_array(\"NDB_No\", \"FdGrp_Cd\", \"Long_Desc\", \"Short_Desc\", \"SciName\") FROM \"sr28\".\"FOOD_DES\" WHERE \"FdGrp_Cd\" IN ('"'"'0200'"'"', '"'"'0400'"'"', '"'"'0800'"'"', '"'"'0900'"'"', '"'"'1100'"'"', '"'"'1200'"'"', '"'"'1400'"'"', '"'"'1600'"'"', '"'"'1900'"'"', '"'"'2000'"'"', '"'"'2100'"'"', '"'"'2500'"'"')' 'food_des/data.txt'

copy 'SELECT json_build_array(\"FdGrp_Cd\", \"FdGrp_Desc\") FROM \"sr28\".\"FD_GROUP\" WHERE \"FdGrp_Cd\" IN ('"'"'0200'"'"', '"'"'0400'"'"', '"'"'0800'"'"', '"'"'0900'"'"', '"'"'1100'"'"', '"'"'1200'"'"', '"'"'1400'"'"', '"'"'1600'"'"', '"'"'1900'"'"', '"'"'2000'"'"', '"'"'2100'"'"', '"'"'2500'"'"')' 'fd_group/data.txt'

# copy '\"sr28\".\"DATA_SRC\"' "sr28/DATA_SRC.txt" '\"DataSrc_ID\", \"Authors\", \"Title\", \"Year\", \"Journal\", \"Vol_City\", \"Issue_State\", \"Start_Page\", \"End_Page\"'
# copy '\"sr28\".\"DATSRCLN\"' "sr28/DATSRCLN.txt" '\"NDB_No\", \"Nutr_No\", \"DataSrc_ID\"'
# copy '\"sr28\".\"FOOTNOTE\"' "sr28/FOOTNOTE.txt" '\"NDB_No\", \"Footnt_No\", \"Footnt_Typ\", \"Nutr_No\", \"Footnt_Txt\"'
# copy '\"sr28\".\"WEIGHT\"' "sr28/WEIGHT.txt" '\"NDB_No\", \"Seq\", \"Amount\", \"Msre_Desc\", \"Gm_Wgt\", \"Num_Data_Pts\", \"Std_Dev\"'
# copy '\"sr28\".\"DERIV_CD\"' "sr28/DERIV_CD.txt" '\"Deriv_Cd\", \"Deriv_Desc\"'
# copy '\"sr28\".\"SRC_CD\"' "sr28/SRC_CD.txt" '\"Src_Cd\", \"SrcCd_Desc\"'
# copy '\"sr28\".\"NUTR_DEF\"' "sr28/NUTR_DEF.txt" '\"Nutr_No\", \"Units\", \"Tagname\", \"NutrDesc\", \"Num_Dec\", \"SR_Order\"'
# copy '\"sr28\".\"NUT_DATA\"' "sr28/NUT_DATA.txt" '\"NDB_No\", \"Nutr_No\", \"Nutr_Val\", \"Num_Data_Pts\", \"Std_Error\", \"Src_Cd\", \"Deriv_Cd\", \"Ref_NDB_No\", \"Add_Nutr_Mark\", \"Num_Studies\", \"Min\", \"Max\", \"DF\", \"Low_EB\", \"Up_EB\", \"Stat_cmt\", \"AddMod_Date\", \"CC\"'
# copy '\"sr28\".\"LANGDESC\"' "sr28/LANGDESC.txt" '\"Factor_Code\", \"Description\"'
# copy '\"sr28\".\"LANGUAL\"' "sr28/LANGUAL.txt" '\"NDB_No\", \"Factor_Code\"'
# copy '\"sr28\".\"FD_GROUP\"' "sr28/FD_GROUP.txt" '\"FdGrp_Cd\", \"FdGrp_Desc\"'
# copy '\"sr28\".\"FOOD_DES\"' "sr28/FOOD_DES.txt" '\"NDB_No\", \"FdGrp_Cd\", \"Long_Desc\", \"Short_Desc\", \"ComName\", \"ManufacName\", \"Survey\", \"Ref_desc\", \"Refuse\", \"SciName\", \"N_Factor\", \"Pro_Factor\", \"Fat_Factor\", \"CHO_Factor\"'
