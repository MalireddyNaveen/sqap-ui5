sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("com.app.ui5demo.controller.Home", {
            onInit: function () {
                const oPerson={
                    employee:{
                    name:"naveen",
                    age:21
                    }
                }
                const ojsonmodel=new JSONModel(oPerson);
              this.getView().setModel(ojsonmodel,"Employedetails")
            },

            //most of the times it gives oEvent as a parameter
            onCalculate: function (oEvent) {

                //adding debugger manually(but dont use)
                //get the vaules
                //addition of values
                //print results
                debugger
                const oView = this.getView();
                const iFirst = parseInt(oView.byId("firstNumber").getValue());
                const isecond = parseInt(oView.byId("secondNumber").getValue());
                const add = iFirst + isecond;
                alert(add)

            },
          
        });

    });
