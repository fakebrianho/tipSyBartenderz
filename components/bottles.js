AFRAME.registerComponent('makeBottles', {
  init: function () {
        let sceneEl = document.querySelector('a-scene');
        let wineMod = document.createElement('a-asset-item'); 
        let wineMat = document.createElement('a-asset-item');
        wineMod.setAttribute('id', 'wineModel');
        wineMod.setAttribute('src', 'assets/wine.obj');
        wineMat.setAttribute('id', 'wineMaterial');
        wineMat.setAttribute('src', 'assets/wine.mtl');
        
  }
});
        <a-asset-item id="wineModel" src="assets/wine.obj"></a-asset-item>
        <a-asset-item id="wineMaterial" src="assets/wine.mtl"></a-asset-item> 
        <!--Coke Bottle-->
        <a-asset-item id="cokeModel" src="assets/CHAHIN_BOTTLE_OF_SODA.obj"></a-asset-item> 
        <a-asset-item id="cokeMaterial" src="assets/CHAHIN_BOTTLE_OF_SODA.mtl"></a-asset-item>
        <!--??? Bottle-->
        <a-asset-item id="hehModel" src="assets/model.obj"></a-asset-item> 
        <a-asset-item id="hehMaterial" src="assets/materials.mtl"></a-asset-item> 
        <!--Water Bottle-->
        <a-asset-item id="waterModel" src="assets/Water_Bottle_01.obj"></a-asset-item> 
        <!--Cocktail-->
        <a-asset-item id="cockTailModel" src="assets/cocktail.obj"></a-asset-item> 
        <a-asset-item id="cockTailMaterial" src="assets/cocktail.mtl"></a-asset-item> 
        <!--Wine--> 
        <a-asset-item id="wiineModel" src="assets/BootleOfWine_248.obj"></a-asset-item> 
        <a-asset-item id="wiineMaterial" src="assets/BootleOfWine_248.mtl"></a-asset-item> 
        <!--item5-->
        <a-asset-item id="flaskModel" src="assets/Erlenmeyerflask.obj"></a-asset-item> 
        <a-asset-item id="flaskMaterial" src="assets/Erlenmeyerflask.mtl"></a-asset-item> 
        <!--item6-->
        <a-asset-item id="cheeseModel" src="assets/cheWine.obj"></a-asset-item> 
        <a-asset-item id="cheeseMaterial" src="assets/cheWine.mtl"></a-asset-item> 
        <!--item7-->
        <a-asset-item id="watModel" src="assets/wat.obj"></a-asset-item> 
        <a-asset-item id="watMaterial" src="assets/wat.mtl"></a-asset-item> 
        <!--item8-->
        <a-asset-item id="b3Model" src="assets/Bottle_of_Wine.obj"></a-asset-item> 
        <a-asset-item id="b3Material" src="assets/Bottle_of_Wine.mtl"></a-asset-item> 
        <!--item9--> 
        <a-asset-item id="wineAgainModel" src="assets/248.obj"></a-asset-item> 
        <a-asset-item id="wineAgainMaterial" src="assets/248.mtl"></a-asset-item> 
        <!--barTable-->
        <a-asset-item id="BARMOD" src="assets/bt.obj"></a-asset-item> 
        <a-asset-item id="BARMAT" src="assets/bt.mtl"></a-asset-item> 
        <!--Stool-->
        <a-asset-item id="stoolMod" src="assets/stool.obj"></a-asset-item> 
        <a-asset-item id="stoolMat" src="assets/stool.mtl"></a-asset-item> 
        <!--Ceiling--> 
        <a-asset-item id="ceilingMod" src="assets/wall.obj"></a-asset-item> 
        <a-asset-item id="ceilingMat" src="assets/wall.mtl"></a-asset-item> 

        <a-asset-item id="barModel" src="assets/models/bar.obj">
        <a-asset-item id="barMaterial" src="assets/textures/bar.mtl">
        <a-asset-item id="bgTable" src="assets/models/table.obj">
        <a-asset-item id="tableModel" src="assets/models/itme.obj">
        <a-asset-item id="tableMaterial" src="assets/textures/itme.mtl">
 
