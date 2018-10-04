

function calcular_total() {
	
	var total = 0, total2=0;
	total += ( document.getElementById('txt_leche').value * document.getElementById('txt_val_leche').value ) ;
	total += ( document.getElementById('txt_huevos').value * document.getElementById('txt_val_huevos').value ) ;
	total += ( document.getElementById('txt_pan').value * document.getElementById('txt_val_pan').value ) ;
	document.getElementById('txt_subtotal1').value =  total ;
	document.getElementById('txt_iva1').value =  calcular_iva( total, document.getElementById('txt_val_iva').value  ); 

	total2 += ( document.getElementById('txt_jabon').value * document.getElementById('txt_val_jabon').value ) ;
	total2 += ( document.getElementById('txt_shampoo').value * document.getElementById('txt_val_shampoo').value ) ;
	total2 += ( document.getElementById('txt_crema').value * document.getElementById('txt_val_crema').value ) ;
	document.getElementById('txt_subtotal2').value =  total2 ;
	document.getElementById('txt_iva2').value =  calcular_iva( total2, document.getElementById('txt_val_iva').value  ); 

	total += total2;

	document.getElementById('txt_main_subtotal').value =  total ;
	var ivaTotal = calcular_iva( total, document.getElementById('txt_val_iva').value  );
	document.getElementById('txt_main_iva').value =  ivaTotal ;
	document.getElementById('txt_main_total').value =  total + ivaTotal ;

}


function calcular_iva( valor, iva ) {
	return valor * iva;
}