

alert("Welcome to MENZ STYLEZ");

document.querySelector("#toggling").addEventListener("click", function () {

	document.querySelector(".menu").classList.toggle("showMenu");
});




















document.querySelector(".searchBtn").addEventListener("click", function () {

	var information = document.querySelector(".inputClass").value;





	switch (information) {

		case "HAIRDRYERS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='Hairdryer.html'>HAIRDRYERS</a>"
			document.querySelector(".inputClass").value = '';
			break;


		case "Hairdryer ":
			document.querySelector(".searchBtn").innerHTML = "<a href ='Hairdryer.html'>Hairdryer</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "GEL":
			document.querySelector(".searchBtn").innerHTML = "<a href ='GEL.html'>GEL</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "SHAMPOO":
			document.querySelector(".searchBtn").innerHTML = "<a href ='SHAMPOO.html'>SHAMPOO</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "CONDITIONER":
			document.querySelector(".searchBtn").innerHTML = "<a href ='SHAMPOO.html'>CONDITIONER</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "SUNGLASSES":
			document.querySelector(".searchBtn").innerHTML = "<a href ='SUNGLASSES.html'>SUNGLASSES </a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "FACEWASH":
			document.querySelector(".searchBtn").innerHTML = "<a href ='FACEWASH.html'>FACEWASH </a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "BEARD OILS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='BEARD.html'>BEARD OILS </a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "AFTERSHAVES":
			document.querySelector(".searchBtn").innerHTML = "<a href ='AFTERSHAVES.html'>AFTERSHAVES</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "hairdryer":
			document.querySelector(".searchBtn").innerHTML = "<a href ='Hairdryer.html'>Hairdryer</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "TRIMMERS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='TRIMMERS.html'>TRIMMERS</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "REZORS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='REZORS.html'>REZORS</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "CASUAL SHIRTS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='CASUAL SHIRTS.html'>CASUAL SHIRTS</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "CASUAL SHIRTS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='CASUAL.html'>CASUAL SHIRTS</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "FORMAL SHIRTS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='FORMAL.html'>FORMAL SHIRTS</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "TIES":
			document.querySelector(".searchBtn").innerHTML = "<a href ='TIES.html'>TIES</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "T-SHIRTS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='T-SHIRTS.html'>T-SHIRTS</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "JACKETS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='JACKETS.html'>JACKETS</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "BLAZERS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='BLAZERS.html'>BLAZERS</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "HOODIES":
			document.querySelector(".searchBtn").innerHTML = "<a href ='HOODIES.html'>HOODIES</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "WRIST WATCH":
			document.querySelector(".searchBtn").innerHTML = "<a href ='TIME.html'>WRIST WATCH</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "WRIST BANDS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='BANDS.html'>WRIST BANDS</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "JEANS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='JEANS.html'>JEANS</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "TROUSERS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='TROUSERS.html'>TROUSERS</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "UNDER GARMENTS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='UNDER.html'>UNDER GARMENTS</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "BELTS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='BELTS.html'>BELTS</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "WALLETS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='WALLETS.html'>WALLETS</a>"
			document.querySelector(".inputClass").value = '';
			break;

		case "DEODORENTS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='DEODORENTS.html'>DEODORENTS</a>"
			document.querySelector(".inputClass").value = '';
			break;



		case "SOCKS":
			document.querySelector(".searchBtn").innerHTML = "<a href ='SOCKS.html'>SOCKS</a>"
			document.querySelector(".inputClass").value = '';
			break;



		case "SHOES":
			document.querySelector(".searchBtn").innerHTML = "<a href ='SHOES.html'>SHOES</a>"
			document.querySelector(".inputClass").value = '';
			break;




		case "":
			console.log("once clicked");
			break;



		default:
			alert("Sorry, we dont't have the product or you've a wrong spelling")
	}











	/*
		document.querySelector(".searchBtn").innerHTML = "<a href='https://www."+information+".com'> Search </a>";
		
		//"<a href = 'information."+ "html'> Search </a>";
		// "<a href='https://www."+information+".com'> Search </a>";
		//
		// "<a href='information +'.html'> Search </a>";
	*/



});


// "<a href = 'information."+ ".html'>"+information+"</a>";


/* $uservar = $_REQUEST['username'];
echo "<a href='https://www.".$uservar.".com'>";
echo "<b>".$_REQUEST['username'];
echo "</a></b>"; */



// if else 



let carts = document.querySelectorAll(".cart");





//products has been taken here...


let products = [
	{
		name: 'a1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'a2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'a3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'a4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'a5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'a6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'a7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'a8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'a9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'a4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'a5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'a6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'a7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'a8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'a9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'a11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'a12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'a13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'a14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'a15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'a16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'a17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'a18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},

	//2




	{
		name: 'b1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'b2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'b3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'b4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'b5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'b6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'b7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'b8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'b9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'b4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'b5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'b6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'b7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'b8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'b9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'b11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'b12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'b13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'b14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'b15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'b16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'b17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'b18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},




	//3


	{
		name: 'c1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'c2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'c3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'c4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'c5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'c6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'c7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'c8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'c9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'c4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'c5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'c6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'c7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'c8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'c9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'c11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'c12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'c13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'c14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'c15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'c16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'c17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'c18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},




	//4


	{
		name: 'd1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'd2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'd3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'd4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'd5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'd6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'd7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'd8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'd9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'd4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'd5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'd6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'd7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'd8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'd9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'd11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'd12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'd13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'd14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'd15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'd16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'd17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'd18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},




	//5


	{
		name: 'e1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'e2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'e3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'e4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'e5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'e6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'e7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'e8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'e9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'e4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'e5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'e6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'e7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'e8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'e9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'e11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'e12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'e13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'e14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'e15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'e16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'e17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'e18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},



	//6



	{
		name: 'f1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'f2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'f3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'f4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'f5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'f6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'f7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'f8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'f9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'f4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'f5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'f6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'f7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'f8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'f9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'f11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'f12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'f13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'f14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'f15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'f16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'f17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'f18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},



	//7



	{
		name: 'g1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'g2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'g3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'g4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'g5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'g6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'g7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'g8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'g9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'g4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'g5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'g6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'g7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'g8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'g9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'g11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'g12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'g13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'g14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'g15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'g16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'g17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'g18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},



	//8



	{
		name: 'h1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'h2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'h3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'h4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'h5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'h6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'h7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'h8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'h9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'h4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'h5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'h6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'h7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'h8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'h9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'h11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'h12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'h13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'h14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'h15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'h16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'h17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'h18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},



	//9



	{
		name: 'i1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'i2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'i3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'i4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'i5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'i6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'i7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'i8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'i9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'i4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'i5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'i6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'i7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'i8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'i9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'i11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'i12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'i13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'i14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'i15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'i16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'i17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'i18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},



	//10



	{
		name: 'j1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'j2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'j3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'j4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'j5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'j6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'j7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'j8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'j9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'j4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'j5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'j6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'j7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'j8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'j9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'j11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'j12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'j13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'j14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'j15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'j16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'j17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'j18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},


	//11




	{
		name: 'k1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'k2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'k3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'k4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'k5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'k6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'k7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'k8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'k9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'k4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'k5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'k6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'k7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'k8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'k9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'k11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'k12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'k13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'k14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'k15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'k16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'k17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'k18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},




	//12


	{
		name: 'l1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'l2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'l3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'l4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'l5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'l6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'l7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'l8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'l9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'l4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'l5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'l6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'l7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'l8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'l9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'l11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'l12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'l13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'l14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'l15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'l16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'l17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'l18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},



	//13



	{
		name: 'm1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'm2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'm3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'm4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'm5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'm6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'm7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'm8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'm9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'm4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'm5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'm6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'm7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'm8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'm9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'm11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'm12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'm13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'm14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'm15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'm16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'm17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'm18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},




	//14


	{
		name: 'n1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'n2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'n3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'n4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'n5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'n6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'n7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'n8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'n9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'n4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'n5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'n6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'n7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'n8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'n9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'n11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'n12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'n13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'n14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'n15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'n16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'n17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'n18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},



	//15



	{
		name: 'o1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'o2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'o3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'o4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'o5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'o6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'o7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'o8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'o9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'o4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'o5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'o6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'o7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'o8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'o9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'o11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'o12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'o13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'o14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'o15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'o16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'o17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'o18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},



	//16


	{
		name: 'p1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'p2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'p3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'p4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'p5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'p6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'p7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'p8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'p9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'p4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'p5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'p6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'p7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'p8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'p9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'p11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'p12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'p13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'p14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'p15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'p16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'p17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'p18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},



	//17


	{
		name: 'q1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'q2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'q3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'q4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'q5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'q6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'q7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'q8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'q9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'q4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'q5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'q6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'q7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'q8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'q9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'q11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'q12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'q13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'q14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'q15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'q16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'q17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'q18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},



	//18


	{
		name: 'r1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'r2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'r3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'r4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'r5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'r6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'r7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'r8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'r9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'r4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'r5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'r6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'r7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'r8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'r9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'r11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'r12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'r13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'r14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'r15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'r16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'r17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'r18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},




	//19


	{
		name: 's1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 's2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 's3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 's4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 's5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 's6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 's7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 's8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 's9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 's4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 's5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 's6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 's7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 's8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 's9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 's11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 's12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 's13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 's14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 's15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 's16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 's17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 's18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},



	//20



	{
		name: 't1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 't2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 't3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 't4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 't5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 't6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 't7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 't8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 't9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 't4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 't5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 't6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 't7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 't8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 't9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 't11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 't12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 't13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 't14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 't15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 't16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 't17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 't18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},





	//21

	{
		name: 'u1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'u2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'u3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'u4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'u5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'u6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'u7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'u8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'u9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'u4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'u5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'u6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'u7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'u8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'u9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'u11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'u12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'u13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'u14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'u15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'u16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'u17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'u18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},





	//22

	{
		name: 'v1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'v2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'v3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'v4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'v5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'v6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'v7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'v8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'v9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'v4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'v5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'v6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'v7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'v8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'v9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'v11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'v12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'v13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'v14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'v15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'v16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'v17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'v18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},




	//23


	{
		name: 'w1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'w2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'w3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'w4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'w5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'w6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'w7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'w8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'w9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'w4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'w5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'w6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'w7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'w8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'w9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'w11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'w12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'w13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'w14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'w15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'w16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'w17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'w18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},




	//24


	{
		name: 'x1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'x2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'x3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'x4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'x5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'x6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'x7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'x8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'x9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'x4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'x5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'x6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'x7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'x8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'x9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'x11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'x12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'x13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'x14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'x15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'x16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'x17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'x18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},




	//25


	{
		name: 'y1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'y2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'y3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'y4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'y5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'y6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'y7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'y8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'y9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'y4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'y5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'y6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'y7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'y8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'y9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'y11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'y12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'y13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'y14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'y15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'y16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'y17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'y18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},





	//26

	{
		name: 'z1',
		tag: 'hairdryer1',
		price: 15,
		inCart: 0
	},
	{
		name: 'z2',
		tag: 'hairdryer2',
		price: 25,
		inCart: 0
	},
	{
		name: 'z3',
		tag: 'hairdryer3',
		price: 35,
		inCart: 0
	},
	{
		name: 'z4',
		tag: 'hairdryer4',
		price: 45,
		inCart: 0
	},
	{
		name: 'z5',
		tag: 'hairdryer4',
		price: 20,
		inCart: 0
	},
	{
		name: 'z6',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'z7',
		tag: 'hairdryer4',
		price: 25,
		inCart: 0
	},
	{
		name: 'z8',
		tag: 'hairdryer4',
		price: 65,
		inCart: 0
	},
	{
		name: 'z9',
		tag: 'hairdryer4',
		price: 75,
		inCart: 0
	},
	{
		name: 'z4',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'z5',
		tag: 'hairdryer4',
		price: 5,
		inCart: 0
	},
	{
		name: 'z6',
		tag: 'hairdryer4',
		price: 39,
		inCart: 0
	},
	{
		name: 'z7',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'z8',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'z9',
		tag: 'hairdryer4',
		price: 50,
		inCart: 0
	},
	{
		name: '10',
		tag: 'hairdryer4',
		price: 1.5,
		inCart: 0
	},
	{
		name: 'z11',
		tag: 'hairdryer4',
		price: 15.9,
		inCart: 0
	},
	{
		name: 'z12',
		tag: 'hairdryer4',
		price: 17,
		inCart: 0
	},
	{
		name: 'z13',
		tag: 'hairdryer4',
		price: 15,
		inCart: 0
	},
	{
		name: 'z14',
		tag: 'hairdryer4',
		price: 19,
		inCart: 0
	},
	{
		name: 'z15',
		tag: 'hairdryer4',
		price: 200,
		inCart: 0
	},
	{
		name: 'z16',
		tag: 'hairdryer4',
		price: 100,
		inCart: 0
	},
	{
		name: 'z17',
		tag: 'hairdryer4',
		price: 105,
		inCart: 0
	},
	{
		name: 'z18',
		tag: 'hairdryer4',
		price: 150,
		inCart: 0
	},

]













for (let i = 0; i < carts.length; i++) {
	carts[i].addEventListener("click", () => {
		curtNumbers(products[i]);
	})
}



function onLoadcurtNumbers() {
	let productNumbers = localStorage.getItem("curtNumbers");


	if (productNumbers) {
		document.querySelector(".addcart span").textContent = productNumbers;

	}
}







function curtNumbers(product) {
	//console.log("the product is clicked is : ", product);
	let productNumbers = localStorage.getItem("curtNumbers");

	productNumbers = parseInt(productNumbers);

	if (productNumbers) {
		localStorage.setItem("curtNumbers", productNumbers + 1);
		document.querySelector(".addcart span").textContent = productNumbers + 1;
	}
	else {
		localStorage.setItem("curtNumbers", 1);
		document.querySelector(".addcart span").textContent = 1;
	}
	setItems(product);
}

//setItems(product);


function setItems(product) {

	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);

	if (cartItems != null) {

		if (cartItems[product.tag] == undefined) {
			cartItems = {
				...cartItems,
				[product.tag]: product
			}

		}
		cartItems[product.tag].inCart += 1;

	} else {

		product.inCart = 1;
		cartItems = {
			[product.tag]: product

		}
	}

	localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}
onLoadcurtNumbers();








// //removing cart list.



document.querySelector(".cross").addEventListener("click", function(){
	alert("the cart is deleting...");
	let del = document.querySelector(".addcart span").value= 0;
	document.querySelector(".addcart").innerHTML = ' <li class="addcart"> | <i class="fa fa-shopping-cart" aria-hidden="true"></i><span>0</span> Carts|<div class="cross"><i class="fa fa-trash-o" aria-hidden="true"></i></div></li>';
});




