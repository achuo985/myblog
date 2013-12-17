
var oTable;
$(document).ready(function(){
	initModal();
	oTable = initTable();
	
	//checkboxȫѡ
	$("#checkAll").on("click",function(){
		if($(this).attr("checked")==="checked"){
			$("input[name='checkList']").attr("checked",$(this).attr("checked"));
		}else{
			$("input[name='checkList']").attr("checked",false);
		}
	});
});


function initTable(){
	
	var table =  $("#example").dataTable({
	     	"iDisplayLength":10,
	        'bPaginate': true,      
	        "bDestory":true,
	        "bRetrieve":true,
	        "bFilter":true,
	        "bSort":false,
	        "bProcessing": true,  
				"aaData": [
					[
						"<input type='checkbox' name='checkList' value='1'>",
					  "���ͱ�ǩ-���ߵ���",
					  "http://www.gbtags.com/gb/debug/new.htm",
					  "<a href='http://www.gbtags.com/gb/debug/new.htm'>����</a>",
						""
					],
					[
						"<input type='checkbox' name='checkList' value='1'>",
					  "���ͱ�ǩ-live�γ�",
					  "http://www.gbtags.com/gb/alltrainingcalendar.htm",
					  "<a href='http://www.gbtags.com/gb/alltrainingcalendar.htm'>����</a>",
						""
					],
					[
						"<input type='checkbox' name='checkList' value='1'>",
					  "���ͱ�ǩ-ר��̳�",
					  "http://www.gbtags.com/gb/postgroups.htm",
					  "<a href='http://www.gbtags.com/gb/postgroups.htm'>����</a>",
						""
					],
					 [
						"<input type='checkbox' name='checkList' value='1'>",
					  "���ͱ�ǩ-�����̬",
					  "http://www.gbtags.com/gb/explore.htm",
					  "<a href='http://www.gbtags.com/gb/explore.htm'>����</a>",
						""
					],
					 [
						"<input type='checkbox' name='checkList' value='1'>",
					  "���ͱ�ǩ-ԭ���Ƽ�",
					  "http://www.gbtags.com/gb/tag/1.htm",
					  "<a href='http://www.gbtags.com/gb/tag/1.htm'>����</a>",
						""
					],
					[
						"<input type='checkbox' name='checkList' value='1'>",
					  "���ͱ�ǩ-ȫ����ǩ",
					  "http://www.gbtags.com/gb/tags.htm",
					  "<a href='http://www.gbtags.com/gb/tags.htm'>����</a>",
						""
					],
					[
						"<input type='checkbox' name='checkList' value='1'>",
					  "���ͱ�ǩ-���뼫��ԭ������С��",
					  "http://www.gbtags.com/gb/share/2446.htm",
					  "<a href='http://www.gbtags.com/gb/share/2446.htm'>����</a>",
						""
					],
					 [
						"<input type='checkbox' name='checkList' value='1'>",
					  "���ͱ�ǩ-��������",
					  "http://www.gbtags.com/gb/aboutus.htm",
					  "<a href='http://www.gbtags.com/gb/aboutus.htm'>����</a>",
						""
					],
					 [
						"<input type='checkbox' name='checkList' value='1'>",
					  "���ͱ�ǩ-���뼫������",
					  "http://www.gbtags.com/gb/requestaccount.htm",
					  "<a href='http://www.gbtags.com/gb/requestaccount.htm'>����</a>",
						""
					], 
				  [
						"<input type='checkbox' name='checkList' value='1'>",
					  "���ͱ�ǩ-�������",
					  "http://www.gbtags.com/gb/applydaren.htm",
					  "<a href='http://www.gbtags.com/gb/applydaren.htm'>����</a>",
						""
					], [
						"<input type='checkbox' name='checkList' value='1'>",
					  "���ͱ�ǩ-������",
					  "http://www.gbtags.com/gb/ads.htm",
					  "<a href='http://www.gbtags.com/gb/ads.htm'>����</a>",
						""
					]
				  ],
					"aoColumns": [
						{ "sTitle": "<input type='checkbox' id='checkAll'>"},
						{ "sTitle": "����" },
						{ "sTitle": "��ַ" },
						{ "sTitle": "����" },
						{ "sTitle": "����",
							"fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
							$(nTd).html("<a href='javascript:void(0);' onclick='_editFun("+sData+")'>�༭</a>&nbsp;&nbsp;")
							.append("<a href='javascript:void(0);' onclick='_deleteFun("+sData+")'>ɾ��</a>");
				        
							} 
						}
					
					],
	        "sDom": "<'row-fluid'<'span6 myBtnBox'><'span6'f>r>t<'row-fluid'<'span6'i><'span6 'p>>",
			"sPaginationType": "bootstrap",
			/*"oLanguage": {
				"sUrl": "jsplugin/datatables/zh-CN.txt",
				"sSearch": "���ٹ��ˣ�" 
			} ,*/
			"fnCreatedRow": function(nRow, aData, iDataIndex){
				//add selected class
	        	$(nRow).click(function(){
	        		if( $(this).hasClass('row_selected') ){
	        			$(this).removeClass('row_selected');
	        		}else{
	        			oTable.$('tr.row_selected').removeClass('row_selected');
	        			$(this).addClass('row_selected');
	        		}
	        	});
	        },
			"fnInitComplete": function(oSettings, json){
				$('<a href="#myModal" class="btn btn-primary" data-toggle="modal">����</a>'+'&nbsp;'+
				'<a href="#" class="btn btn-primary" id="editFun">�޸�</a> '+'&nbsp;'+
				'<a href="#" class="btn btn-danger" id="deleteFun">ɾ��</a>'+'&nbsp;').appendTo($('.myBtnBox'));
				//$("#deleteFun").click(_deleteList);
				//$("#editFun").click(_value);
			} 
	     });
	return table;
}

function initModal(){
	$('#myModal').on('show', function(){
		$('body', document).addClass('modal-open');
		$('<div class="modal-backdrop fade in"></div>').appendTo($('body', document));
	});
	$('#myModal').on('hide', function(){
		$('body', document).removeClass('modal-open');
		$('div.modal-backdrop').remove();
	});
}