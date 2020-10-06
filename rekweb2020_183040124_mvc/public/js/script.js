$(function(){

	$('.tombolTambahData').on('click', function(){

	$('#judulModal').html('Tambah Data Mahasiswa');
	$('.modal-footer button[type=submit]').html('Tambah Data');
	});
	$('.modal-body form').attr('action', 'http://localhost/rekweb2020_183040124_mvc/public/mahasiswa/ubah');

	$('.tampilModalUbah').on('click', function(){

		$('#judulModal').html('Ubah Data Mahasiswa');
		$('.modal-footer button[type=submit]').html('Ubah Data');
	
		const id = $(this).data('id');

		$.ajax({
			url:'http://localhost/rekweb2020_183040124_mvc/public/mahasiswa/getubah',
			data: {id : id},
			method: 'post',
			dataType: 'json',
			success: function(data){
				$('#nama').val(data.nama);
				$('#nrp').val(data.nrp);
				$('#email').val(data.email);
				$('#jurusan').val(data.jurusan);
				$('#id').val(data.id);
					
			}
		});

	});

});