import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
declare let ElfsightEmbedSDK: any;



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const containerReview = document.body.querySelector('#elfsight-reviews');
    const containerInstagram = document.body.querySelector('#elfsight-instagram')
const options = {
  reviewsId: "8afa02ff-3366-4cd6-9a53-03f114db3dcd",
  instagramId: "c67f8e08-8f94-4348-8b4a-a4aa80b5cd76"
};
    console.log("in ngavi")
    ElfsightEmbedSDK.displayWidget(containerReview, options.reviewsId);
    ElfsightEmbedSDK.displayWidget(containerInstagram, options.instagramId);
  }

}



