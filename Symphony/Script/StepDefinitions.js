﻿//USEUNIT LaunchApplication
//USEUNIT RiskManager
//USEUNIT TradeCapture


Given("I have launched Risk Manager Application", function (){
 //Launching RiskManager Application
 LaunchApplication["LaunchRiskManager"]();
});

When("I created a Real Portfolio on {arg} as {arg}", function (WorldPortName,RealportName){
  Project["Variables"]["RealPortID"]=RiskManager["CreateRealPortfolio"](WorldPortName,RealportName);
});

Then("I verified the port number for the created Real Portfolio", function (){
 
});

When("I have Launched Trade Capture application", function (){
  //Launching Trade Capture Application
  LaunchApplication["LaunchTradeCapture"]();
 
});

Then("I created a Physical Buy Trade on Portfolio", function (){
  //Create  a Physical Buy Trade
  TradeCapture["CreatePhysicalTrade"](1,Project["Variables"]["RealPortID"]);

});

Then("I verified the Trade number for the saved Physical Buy Trade", function (){
  
});

Then("I created a Physcal Fomula Sale Trade", function (){
  
});

Then("I verified the Trade number for the saved Physical sale Trade", function (){
  
});

When("I have launched Logistics application", function (){
 
});

Then("I created the shipment", function (){
  
});

Then("I verified the generated shipment Ids", function (){
 
});

Then("I hvae Actualized using BL actuals and verified", function (){
  
});

Then("I Propagate Actuals and verified the message {arg}", function (param1){
  
});

When("I have launched Risk Manager Application", function (){
  
});

Then("I Checked the Position in Portfolio Manager for the created shipments", function (){
  
});

Then("verified the Positions with corresponding trades from the App inspector\\/Trade distributions", function (){
  
});

When("I have launched the PASS Application", function (){
  
});

Then("I Run the pass by selecting the tasks compute PL, Price Formula Trade", function (){
  
});

Then("The PASS run is completed successfully", function (){
 
});

Then("Verify the PL in Portfolio Report", function (){
  
});

Then("I verified the Position in Portfolio Manager", function (){
  throw new Error("Not implemented.");
});
