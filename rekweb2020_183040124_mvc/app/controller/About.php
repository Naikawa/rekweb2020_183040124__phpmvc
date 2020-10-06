<?php 

class About extends Controller{
	public function index($nama = 'Reyhan', $pekerjaan = 'pelajar', $umur = 21){
		$data['nama'] = $nama;
		$data['pekerjaan'] = $pekerjaan;
		$data['umur'] = $umur;
		$data['judul'] = 'Abour Me';
		$this->view('templates/header', $data);
		$this->view('about/index', $data);
		$this->view('templates/footer');
	}


	public function page(){
		$this->view('templates/header', $data);
		$this->view('about/index');
		$this->view('templates/footer');
	} 
}