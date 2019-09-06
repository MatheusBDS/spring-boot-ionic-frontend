import { API_CONFIG } from './../../config/api.config';
import { CategoriaService } from './../../services/domain/categoria.service';
import { Component } from '@angular/core';
import { CategoriaDTO } from '../../models/categoria.dto';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: CategoriaDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoriaService: CategoriaService) {
  }

  ionViewDidLoad() {

    this.categoriaService.findAll()
      .subscribe(response => {
        this.items = response;
      }, error => {});

  }

  showProdutos(categoria_id: string){
    this.navCtrl.push('ProdutosPage', {categoria_id: categoria_id});
  }

}
