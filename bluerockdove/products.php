<?php
	echo '<script type="text/javascript">
	<!-- THis is your JEWELRY OBJECT skeleton with all its parameters -->
		function items(picture,price,title,description,type){
			this.Picture=picture;
			this.Description=description;
			this.Price=price;
			this.Title=title;
			this.Type=type;
		}
		function flexboxes(piclocation, pricelocation, titlelocation, deslocation){
			this.PicLocation = piclocation;
			this.Deslocation = deslocation;
			this.Titlelocation = titlelocation;
			this.Pricelocation = pricelocation;
		}
		
		<!-- JS function which holds each items and stores it with the flexbox,  so that when you click the button it can advance to the next window and have the data necissary to do so?. -->
		<!-- OR?? can i give each items its items array number which can then be refrenced to later????
		
		<!-- JS-- IMPORTANT-SAVE - product objects are created and maintained here -- (add-to or delete-from) -- this section is where all product objects are maintained  - - SAVE-IMPORTANT ---  />;-->
		var itemsArray = new Array();
		 itemsArray[0] = new items("images/necklace/IMG_N1062.jpg",1.95,"NECKLACE","Item Test Description PLUS A WHOLE LOT MORE","necklace");
		 itemsArray[1] = new items("images/necklace/IMG_N1064.jpg",2.95,"NECKLACE","Item Test Description","necklace");
		 itemsArray[2] = new items("images/bracelet/IMG_B1082.jpg",3.95,"BRACELET","Item Test Description","bracelet");
		 itemsArray[3] = new items("images/bracelet/IMG_B1087.jpg",4.95,"BRACELET","Item Test Description","bracelet");
		 itemsArray[4] = new items("images/pendant/IMG_P1039.jpg",5.95,"PENDANT","Item Test Description","pendant");
		 itemsArray[5] = new items("images/pendant/IMG_P1041.jpg",6.95,"PENDANT","Item Test Description","pendant");
		 itemsArray[6] = new items("images/pendant/IMG_P1045.jpg",7.95,"PENDANT","Item Test Description","pendant");
		 itemsArray[7] = new items("images/necklace/IMG_N1052.jpg",8.95,"NECKLACE","Item Test Description","necklace");
		 itemsArray[8] = new items("images/necklace/IMG_N1061.jpg",9.95,"NECKLACE","Item Test Description","necklace");
		 itemsArray[9] = new items("images/necklace/IMG_N1072.jpg",10.95,"NECKLACE","Item Test Description","necklace");
		 itemsArray[10] = new items("images/necklace/IMG_N1079-1.jpg",11.95,"NECKLACE","Item Test Description","necklace");
		 itemsArray[11] = new items("images/necklace/IMG_N1080.jpg",12.95,"NECKLACE","Item Test Description","necklace");
		 itemsArray[12] = new items("images/necklace/IMG_N1083.jpg",13.95,"NECKLACE","Item Test Description","necklace");
		 itemsArray[13] = new items("images/necklace/IMG_N1089.jpg",14.95,"NECKLACE","Item Test Description","necklace");
		 itemsArray[14] = new items("images/bracelet/IMG_B1068.jpg",15.95,"BRACELET","Item Test Description","bracelet");
		 itemsArray[15] = new items("images/bracelet/IMG_B1069.jpg",16.95,"BRACELET","Item Test Description","bracelet");
		 itemsArray[16] = new items("images/bracelet/IMG_B1070.jpg",17.95,"BRACELET","Item Test Description","bracelet");
		 itemsArray[17] = new items("images/bracelet/IMG_B1071.jpg",18.95,"BRACELET","Item Test Description","bracelet");
		 itemsArray[18] = new items("images/bracelet/IMG_B1077.jpg",19.95,"BRACELET","Item Test Description","bracelet");
		 itemsArray[19] = new items("images/pendant/IMG_P1057.jpg",20.95,"PENDANT","Item Test Description","pendant");
		 itemsArray[20] = new items("images/pendant/IMG_P1059.jpg",21.95,"PENDANT","Item Test Description","pendant");
		 itemsArray[21] = new items("images/pendant/IMG_P1075c.jpg",22.95,"PENDANT","Item Test Description","pendant");
		 
			
		<!--JS Function which dynaically loads each flexbox Item with individual produts / with individual id attributes - non working button. -- loads from for loop />;-->
		function loadFlexboxWithItems(counter,item,PicLocation,Titlelocation,Deslocation,Pricelocation){
		
			<!--JS which creates the adds image into flexbox ITEMs and adds a picture with attributes />;-->
			//function createImage(item) {			
				var x = document.createElement("IMG");
				x.setAttribute("src", item.Picture);
				x.setAttribute("height", "100%");
				x.setAttribute("width", "100%");
				x.setAttribute("alt", "The Pic");
				document.getElementById(PicLocation).appendChild(x);
			
			<!--JS which creates the add title description into flexbox ITEMs and adds a paragraph with product title />;-->
			//function createDescription(item) {
				var titlePara = document.createElement("p");
				var titleNode = document.createTextNode(item.Title);
				titlePara.appendChild(titleNode);
				var titleElement = document.getElementById(Titlelocation);
				titleElement.appendChild(titlePara);
				
			<!--JS which creates the add description into flexbox ITEMs and adds a paragraph with product description />;-->
			//function createDescription(item) {
				var desPara = document.createElement("p");
				var desNode = document.createTextNode(item.Description);
				desPara.appendChild(desNode);
				var desElement = document.getElementById(Deslocation);
				desElement.appendChild(desPara);
				//The actual description of the item will go here, and we can set it values and attributes through the append methods avaliable here in JS.
			
			<!--JS which creates the add function into flexbox ITEMs and adds a paragraph with products price />;-->
			//function createPrice(item) {
				var pricePara = document.createElement("p");
				var priceNode = document.createTextNode("$" + item.Price);
				pricePara.appendChild(priceNode);
				var priceElement = document.getElementById(Pricelocation);
				priceElement.appendChild(pricePara);
				
		
		}
			
		<!--JS Function which dynaically loads a flexbox with identical looking flexbox items / with individual id attributes - non working button. -- loads from for loop />;-->
		function addFlexBoxItems(counter, flexboxTaxi, item){
						
			this.flexboxTaxi = flexboxTaxi;
			var parentIdName = 'flex-container';
			var price = item.Price;
			var title = item.Title;
			
			var div = document.createElement('div');
			var currentIdName = "item" + counter;
			div.setAttribute('class', 'item');
			div.setAttribute('id', currentIdName);
			document.getElementById(parentIdName).appendChild(div);
			parentIdName = currentIdName;
			
			var div1 = document.createElement('div');
			currentIdName = "innerItem" + counter;
			div1.setAttribute('class', 'innerItem');
			div1.setAttribute('id', currentIdName);
			document.getElementById(parentIdName).appendChild(div1);
			parentIdName = currentIdName;
			
			div = document.createElement('div');
			currentIdName = "picDesContainer" + counter;
			div.setAttribute('class', 'picDesConainer');
			div.setAttribute('id', currentIdName);
			document.getElementById(parentIdName).appendChild(div);
			parentIdName = currentIdName;
			
			<!--JS for new pic container that just contains the picture class="pictureContainer" id="item1pictureContainer"-->
			div = document.createElement('div');
			currentIdName = "item" + counter + "pictureContainer";
			div.setAttribute('class', 'pictureContainer');
			div.setAttribute('id', currentIdName);
			document.getElementById(parentIdName).appendChild(div);
			parentIdName = currentIdName;
			
			<!-- JS Has been be adjusted to be added within the PicContainer ""-->
			div = document.createElement('div');
			currentIdName = "item" + counter + "picture";
			div.setAttribute('class', 'picture');
			div.setAttribute('id', currentIdName);
			document.getElementById(parentIdName).appendChild(div);
			flexboxTaxi.piclocation = currentIdName;
			parentIdName = "picDesContainer" + counter;
			
			div = document.createElement('div');
			currentIdName = "item" + counter + "descriptionContainer";
			div.setAttribute('class', 'descriptionContainer');
			div.setAttribute('id', currentIdName);
			document.getElementById(parentIdName).appendChild(div);
			parentIdName = currentIdName;
				
			div = document.createElement('div');
			currentIdName = "item" + counter + "descriptionTitle";
			div.setAttribute('class', 'descriptionTitle');
			div.setAttribute('id', currentIdName);
			document.getElementById(parentIdName).appendChild(div);
			flexboxTaxi.titlelocation = currentIdName;
			
			div = document.createElement('div');
			currentIdName = "item" + counter + "description";
			div.setAttribute('class', 'description');
			div.setAttribute('id', currentIdName);
			document.getElementById(parentIdName).appendChild(div);
			parentIdName = "innerItem" + counter;
			flexboxTaxi.deslocation = currentIdName;
			
			div = document.createElement('div');
			currentIdName = "priceContainer" + counter;
			div.setAttribute('class', 'priceContainer');
			div.setAttribute('id', currentIdName);
			document.getElementById(parentIdName).appendChild(div);
			parentIdName = currentIdName;
			
			div = document.createElement('div');
			currentIdName = "item" + counter + "price";
			div.setAttribute('class', 'price');
			div.setAttribute('id', currentIdName);
			document.getElementById(parentIdName).appendChild(div);
			parentIdName = "innerItem" + counter;
			flexboxTaxi.pricelocation = currentIdName;
			
			div = document.createElement('div');
			currentIdName = "buttonContainer" + counter;
			div.setAttribute('class', 'buttonContainer');
			div.setAttribute('id', currentIdName);
			document.getElementById(parentIdName).appendChild(div);
			parentIdName = currentIdName;
			
			var form = document.createElement('form');
			currentIdName = "button" + counter;
			form.id = currentIdName;
			form.action = 'https://www.paypal.com/cgi-bin/webscr';
			form.method = 'post';
			form.target = '_self';
			document.getElementById(parentIdName).appendChild(form);
			parentIdName = currentIdName;
			
			var fieldset = document.createElement('fieldset');
			currentIdName = "fieldset" + counter;
			fieldset.setAttribute('id', currentIdName);
			document.getElementById(parentIdName).appendChild(fieldset);
			parentIdName = currentIdName;
			
			var input = document.createElement('input');
			input.setAttribute('type', 'hidden');
			input.setAttribute('name', 'cmd');
			input.setAttribute('value', '_cart');
			document.getElementById(parentIdName).appendChild(input);
			
			input = document.createElement('input');
			input.setAttribute('type', 'hidden');
			input.setAttribute('name', 'add');
			input.setAttribute('value', '1');
			document.getElementById(parentIdName).appendChild(input);
			
			<!-- Field where you ADD CLIENTS PAYPAL ACCOUNT link in following input  -->
			input = document.createElement('input');
			input.setAttribute('type', 'hidden');
			input.setAttribute('name', 'business');
			input.setAttribute('value', 'labs-feedback-minicart@paypal.com');
			document.getElementById(parentIdName).appendChild(input);
			
			input = document.createElement('input');
			input.id = "item_name" + counter;
			input.type = 'hidden';
			input.name = 'item_name';
			input.value = title;
			document.getElementById(parentIdName).appendChild(input);
			
			input = document.createElement('input');
			input.setAttribute('type', 'hidden');
			input.setAttribute('name', 'quantity');
			input.setAttribute('value', '1');
			document.getElementById(parentIdName).appendChild(input);
			
			input = document.createElement('input');
			input.type = 'hidden';
			input.name = 'amount';
			input.value = price;
			document.getElementById(parentIdName).appendChild(input);

			input = document.createElement('input');
			input.setAttribute('type', 'hidden');
			input.setAttribute('name', 'shipping');
			input.setAttribute('value', '4.50');
			document.getElementById(parentIdName).appendChild(input);
			
			input = document.createElement('input');
			input.setAttribute('type', 'hidden');
			input.setAttribute('name', 'handling');
			input.setAttribute('value', '2.00');
			document.getElementById(parentIdName).appendChild(input);
			
			input = document.createElement('input');
			input.setAttribute('type', 'hidden');
			input.setAttribute('name', 'currency_code');
			input.setAttribute('value', 'USD');
			document.getElementById(parentIdName).appendChild(input);
			
			<!--Input field added for PayPal Cart CONTINUE SHOPPING Button to go back to host wesite tageted page -->
			input = document.createElement('input');
			input.setAttribute('type', 'hidden');
			input.setAttribute('name', 'shopping_url');
			input.setAttribute('value', 'http://www.mkalus.aisites.com/bluerockdove/shop.html');
			document.getElementById(parentIdName).appendChild(input);
			
			input = document.createElement('input');
			input.setAttribute('type', 'image');
			input.setAttribute('name', 'submit');
			input.setAttribute('src', 'http://www.paypalobjects.com/en_US/i/btn/x-click-but22.gif');
			input.setAttribute('border', '0');
			input.setAttribute('width', '87');
			input.setAttribute('height', '23');
			input.setAttribute('alt', 'Make payments with PayPal!');
			document.getElementById(parentIdName).appendChild(input); 
			
			
			return flexboxTaxi;
			
		}	
    </script>	';
		 ?>