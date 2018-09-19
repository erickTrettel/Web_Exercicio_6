$(document).ready(function(){
	$("#btn-enviar").click(function(){
		var pratoPrincipal = $('input[name=prato]:checked').val();
		var convenio = $('option:selected').val();
		var acompanhamentos = [];
		
		$(".chk:checked").each(function() {
			acompanhamentos.push($(this).val());
		});
	    
	    var valorPratoPrincipal = 0;

	    switch (pratoPrincipal) {
	        case 'massa':
	            valorPratoPrincipal = 30;
	            break;
	        case 'carne':
	            valorPratoPrincipal = 35;
	            break;
	        case 'peixe':
	            valorPratoPrincipal = 20;
	            break;
	    }
	    
	    var descontoConvenio = 0;
	    
	    switch (convenio) {
	        case 'placomp':
	        	descontoConvenio = 0;
	        	break;
	        case 'abutua':
	        case 'google':
	        	descontoConvenio = 0.05;
	        	break;
	        case 'prefeitura':
	        	descontoConvenio = 0.10;
	        	break;
	    }
	    
	    var totalAcompanhamentos = 0;

	    for (var i = 0; i < acompanhamentos.length; i++) {
	        
	            if (acompanhamentos[i] === 'salada' || acompanhamentos[i] === 'fritas') {
	                totalAcompanhamentos += 10;
	            } else if (acompanhamentos[i] === 'legumes' || acompanhamentos[i] === 'farofa') {
	                totalAcompanhamentos += 5;
	            }
	        
	    }
	    
	    var valorTotal = valorPratoPrincipal + totalAcompanhamentos - (valorPratoPrincipal + totalAcompanhamentos) * descontoConvenio;

	    $("#valorTotal").html("Valor total: <b>" + valorTotal + "</b>");
		
	});
});
