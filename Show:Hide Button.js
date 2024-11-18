var id = duchamp.getWidgetByName("BTN_VIEW").getValue();
if (id ==="1"){
duchamp.getWidgetByName("3D_Model").getMeshByName("SMT").focus({target: "right",distance: (v) => v*1, viewRay: () => [5.39,4.36,]});
duchamp.getWidgetByName("3D_Model").getMeshByName("SMT").setVisible(true);
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_DIP").setVisible(false);
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_Ruter").setVisible(false);
} 

else if (id ==="2") {
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_DIP").focus({target: "center",viewRay: () => [-14.45, -1, 4.72]});
duchamp.getWidgetByName("3D_Model").getMeshByName("SMT").setVisible(false);
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_DIP").setVisible(true);
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_Ruter").setVisible(false);
}
else if (id ==="3"){
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_Ruter").focus({target: "center",viewRay: () => [10.52, -1, 2.05]});
duchamp.getWidgetByName("3D_Model").getMeshByName("SMT").setVisible(false);
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_DIP").setVisible(false);
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_Ruter").setVisible(true);
}
else {
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_DIP").focus();}





50 右邊
10


//ALL_VIEW
duchamp.getWidgetByName("3D_Model").getMeshByName("SMT").setVisible(true);
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_DIP").setVisible(true);
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_Ruter").setVisible(true);
//all
duchamp.getWidgetByName("text_all").setVisible(true);
duchamp.getWidgetByName("pic_all").setVisible(true);
duchamp.getWidgetByName("text_all_c1").setVisible(false);
duchamp.getWidgetByName("pic_all_c1").setVisible(false);
//smt
duchamp.getWidgetByName("text_smt").setVisible(false);
duchamp.getWidgetByName("pic_smt").setVisible(false);
duchamp.getWidgetByName("text_smt_c1").setVisible(true);
duchamp.getWidgetByName("pic_smt_c1").setVisible(true);
//dip
duchamp.getWidgetByName("text_dip").setVisible(false);
duchamp.getWidgetByName("pic_dip").setVisible(false);
duchamp.getWidgetByName("text_dip_c1").setVisible(true);
duchamp.getWidgetByName("pic_dip_c1").setVisible(true);
//router
duchamp.getWidgetByName("text_router").setVisible(false);
duchamp.getWidgetByName("pic_router").setVisible(false);
duchamp.getWidgetByName("text_router_c1").setVisible(true);
duchamp.getWidgetByName("pic_router_c1").setVisible(true);



//SMT_VIEW
duchamp.getWidgetByName("3D_Model").getMeshByName("SMT").setVisible(true);
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_DIP").setVisible(false);
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_Ruter").setVisible(false);
//all
duchamp.getWidgetByName("text_all").setVisible(false);
duchamp.getWidgetByName("pic_all").setVisible(false);
duchamp.getWidgetByName("text_all_c1").setVisible(true);
duchamp.getWidgetByName("pic_all_c1").setVisible(true);
//smt
duchamp.getWidgetByName("text_smt").setVisible(true);
duchamp.getWidgetByName("pic_smt").setVisible(true);
duchamp.getWidgetByName("text_smt_c1").setVisible(false);
duchamp.getWidgetByName("pic_smt_c1").setVisible(false);
//dip
duchamp.getWidgetByName("text_dip").setVisible(false);
duchamp.getWidgetByName("pic_dip").setVisible(false);
duchamp.getWidgetByName("text_dip_c1").setVisible(true);
duchamp.getWidgetByName("pic_dip_c1").setVisible(true);
//router
duchamp.getWidgetByName("text_router").setVisible(false);
duchamp.getWidgetByName("pic_router").setVisible(false);
duchamp.getWidgetByName("text_router_c1").setVisible(true);
duchamp.getWidgetByName("pic_router_c1").setVisible(true);

//dip_VIEW
duchamp.getWidgetByName("3D_Model").getMeshByName("SMT").setVisible(false);
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_DIP").setVisible(true);
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_Ruter").setVisible(false);
//all
duchamp.getWidgetByName("text_all").setVisible(false);
duchamp.getWidgetByName("pic_all").setVisible(false);
duchamp.getWidgetByName("text_all_c1").setVisible(true);
duchamp.getWidgetByName("pic_all_c1").setVisible(true);
//smt
duchamp.getWidgetByName("text_smt").setVisible(false);
duchamp.getWidgetByName("pic_smt").setVisible(false);
duchamp.getWidgetByName("text_smt_c1").setVisible(true);
duchamp.getWidgetByName("pic_smt_c1").setVisible(true);
//dip
duchamp.getWidgetByName("text_dip").setVisible(true);
duchamp.getWidgetByName("pic_dip").setVisible(true);
duchamp.getWidgetByName("text_dip_c1").setVisible(false);
duchamp.getWidgetByName("pic_dip_c1").setVisible(false);
//router
duchamp.getWidgetByName("text_router").setVisible(false);
duchamp.getWidgetByName("pic_router").setVisible(false);
duchamp.getWidgetByName("text_router_c1").setVisible(true);
duchamp.getWidgetByName("pic_router_c1").setVisible(true);

ROUTER_VIEW
duchamp.getWidgetByName("3D_Model").getMeshByName("SMT").setVisible(false);
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_DIP").setVisible(false);
duchamp.getWidgetByName("3D_Model").getMeshByName("3F_Ruter").setVisible(true);
//all
duchamp.getWidgetByName("text_all").setVisible(false);
duchamp.getWidgetByName("pic_all").setVisible(false);
duchamp.getWidgetByName("text_all_c1").setVisible(true);
duchamp.getWidgetByName("pic_all_c1").setVisible(true);
//smt
duchamp.getWidgetByName("text_smt").setVisible(false);
duchamp.getWidgetByName("pic_smt").setVisible(false);
duchamp.getWidgetByName("text_smt_c1").setVisible(true);
duchamp.getWidgetByName("pic_smt_c1").setVisible(true);
//dip
duchamp.getWidgetByName("text_dip").setVisible(false);
duchamp.getWidgetByName("pic_dip").setVisible(false);
duchamp.getWidgetByName("text_dip_c1").setVisible(true);
duchamp.getWidgetByName("pic_dip_c1").setVisible(true);
//router
duchamp.getWidgetByName("text_router").setVisible(true);
duchamp.getWidgetByName("pic_router").setVisible(true);
duchamp.getWidgetByName("text_router_c1").setVisible(false);
duchamp.getWidgetByName("pic_router_c1").setVisible(false);
