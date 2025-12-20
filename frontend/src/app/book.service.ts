import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookDetails } from './book-details.model';
import { Request } from './request.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books:BookDetails[]=[
  {
    "_id":"01",
    "ownerId": "USR_101",
    "title": "The Midnight Library",
    "author": "Matt Haig",
    "category": "Fiction",
    "description": "A thought-provoking novel where Nora Seed finds herself between life and death in a magical library that allows her to explore all the possible versions of her life. Through these parallel realities, she learns the importance of choices, regrets, and the journey toward finding purpose and meaning.",
    "coverImagePaths": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVxCQONBcs_3wmgkBD8hIxuTwf_Lm7u0IQyeHTRuWzi0DBgDrc-cLY5F_NkU-m-Cx42o_HvMdXWlnew2BWU_j9T1ir5BJfocJ95Qgud2W8Z_Cjh1HJBajG21vo7oKkhLHbtbwlUIUqRyJzu9r6vpcUQSEF1cW7l4rVMWyu5SToBwI6PTFhYxgh-y7ZglcFOy1vngstu6t4_dyNd6ix424-RrIq4QcUo4xyo7dFkVbKrrteD6UANpOxXcFYzakk592xVrRKNa7RW9I"
    ],
    "status": "Available",
    "rentPerMonth": 120,
    "price": 500,
    "addedDate": "2025-01-18T10:00:00.000Z"
  },
  {
    "_id":"02",
    "ownerId": "USR_102",
    "title": "Project Hail Mary",
    "author": "Andy Weir",
    "category": "Sci-Fi",
    "description": "A gripping science-fiction thriller where a lone astronaut wakes up on a spaceship with no memory, discovering he is humanity’s last hope to stop a cosmic disaster. Packed with scientific detail, friendship, survival instinct, and unexpected alliances, this novel keeps readers hooked till the end.",
    "coverImagePaths": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJGGElMRKj3dRxjda4s46IHVrvvICICoHOuoBIAYIlwkIj9tGoGzUF4PPt-caURmycqfLumaGBbtCto6BgA759zU6Cb320jLBSan7NrMrqoTm6057A-3foJhBL-xNrWX25F5KHm-SJC8ait1RC3BcPBq9L2hfROkL5AsVcf6QI0OWQde68qSe_FKUHFlNZEL7rNc5SAdzH_B2n1UuJh0AGT7gEXU8I5rRH60bbJ_NLziQyHEc4B2tIJjodXm3ps4eZUwd6tZLo_Z0"
    ],
    "status": "Available",
    "rentPerMonth": 160,
    "price": 720,
    "addedDate": "2025-01-20T12:30:00.000Z"
  },
  {
    "_id":"03",
    "ownerId": "USR_103",
    "title": "Klara and the Sun",
    "author": "Kazuo Ishiguro",
    "category": "Fiction",
    "description": "A deeply emotional story told from the perspective of Klara, an Artificial-Friend robot designed to care for children. The book explores themes of love, loneliness, advanced technology, and what it truly means to be human in a society driven by expectations and sacrifice.",
    "coverImagePaths": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYMs647f3qEorTQGVR8VvM9uLJOq_11AK7EYwL8D-Nu9x4PEsEAYvH-y_Ls6vzylNaekNwMbEujFks-Lz6QcsNQ9H5fvsAwMZEis9ZBQ3Kr_gGyWkkngEWCpCGO3IvZWBU2w6fF1EH3GwW_H-AuyeEzmdhhZKUc4ouwcxqpE3RCaXbZK62D5PkEdDYZ8OOsO63eXRegfJLDkEDSuAsW_LG04Z4TQaTma9Wh9Fk8Kl-ICVZ7AZLdNfNstkEuC6v7UELvqEttvoL2eQ"
    ],
    "status": "Available",
    "rentPerMonth": 140,
    "price": 610,
    "addedDate": "2025-01-22T09:20:00.000Z"
  },
  {
    "_id":"04",
    "ownerId": "USR_104",
    "title": "The Four Winds",
    "author": "Kristin Hannah",
    "category": "Drama",
    "description": "A compelling historical drama set during the Great Depression, following the journey of a woman who struggles for survival and dignity while facing poverty, drought, and emotional hardships. It reflects resilience, family strength, and courage during one of America’s darkest times.",
    "coverImagePaths": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeK2e_Pg357eAMQXErKSZrvGif9uBB1zLa1X-J-RakZ0R9rcldbaiYAr95QuVwNeVsQjB7bYFdPWwlCRED891d65Tf7RurmwVny9sqv-CLRRIn6jSmB1LrvRyJT4LuEdJBMT6x4GdzU5TJKVwm7oSwJBZEtGDggmmDE8yES38LvNviNmewLIt6QyxiJpv4D2drW4wewBXsCrxusydvHK1JxzRdHr7VvsxuHwouUzgkByCuIOev-xR5_soWFwsXt0kOm4-x0HB1Ja4"
    ],
    "status": "Available",
    "rentPerMonth": 130,
    "price": 580,
    "addedDate": "2025-01-24T14:40:00.000Z"
  },
  {
    "_id":"05",
    "ownerId": "USR_105",
    "title": "Crying in H Mart",
    "author": "Michelle Zauner",
    "category": "Biography",
    "description": "A deeply personal memoir exploring culture, grief, and identity through the author's emotional journey with her mother and Korean heritage. It beautifully portrays the power of food, memories, and healing, touching on love, loss, and rebuilding oneself after tragedy.",
    "coverImagePaths": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhbQOIksLkDEuiZl7DMAgb1BXa9JfIPn4i8LBE_ac_vUtLR_VesDnzp_l0qnFkXkwVbsCQ3kmr3AyN7gb5BuxnZzMxQmL3gCfhvnOHypXlFWfLbnEu-u96x0_TtHxbuWsqSPLHJl1yxLkpOEUkSEslp8gJJ1JJwrw7rhv8x0Rlp6hBqWsUofX6lKFKKNXEjkgaSYJ75FvXO9Zr847a4QSo54KFd90qAlV_dlUPwCldz7Fggtx7cJh33MWLipm-7Tlv7JS20H-pvss"
    ],
    "status": "Available",
    "rentPerMonth": 110,
    "price": 450,
    "addedDate": "2025-01-27T11:05:00.000Z"
  },
  {
    "_id":"06",
    "ownerId": "USR_106",
    "title": "Atomic Habits",
    "author": "James Clear",
    "category": "Self-Help",
    "description": "A powerful guide on transforming habits through small daily improvements. It explains how consistent tiny changes compound into remarkable results over time. This book is filled with practical strategies, real examples, and psychological principles that help build discipline and long-lasting success.",
    "coverImagePaths": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhSGWrvDDNiVDNP3Zjnt2qNvIedUEjy5sIfQKq1E-pve4A_c7CK1VJNIyJuZQh9GGxyVvGnOB6IDRmMSW2Iim_vI1V21vGRKH5pB2S9YQBNrN4vJmOXEAhgoqak-6Bunu7ZYseYDAylVfYm6but6HQ6ftGkrySpu5DG6Xd5YNVwxbs-BbUKpzTOG3sjE1JyFqpwhTP0JsSWZAY_j1M_9S3fOdtPU56OpzgXiSoig6Hv2kETU0OcM2cfFKxa2p8-rT3dUfL_dyhN0Y"
    ],
    "status": "On Loan",
    "rentPerMonth": 150,
    "price": 650,
    "addedDate": "2025-01-26T15:45:00.000Z"
  },
  {
    "_id":"07",
    "ownerId": "USR_107",
    "title": "The Vanishing Half",
    "author": "Brit Bennett",
    "category": "Drama",
    "description": "A beautifully written story about twin sisters who choose different identities—one living as a Black woman and the other passing as white. The book explores race, identity, family bonds, and the complicated effects of choices that shape generations.",
    "coverImagePaths": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPXYbmQUBL2Ae3W_3QJ63SUswd9UbVRdRlZ8l9bN_V0gBNZUy0-XA_x1Fh9nmkrMljYrg4xyKqB1uizDgFQ4C6z4uDlGCCKnNnqw4-oVMmWNpZrtKmr-SDZbhh8f2i5aU0UeZttIUHcOdf6NeR_toWR8UyGMDJR3wqAFbvohZtPCHSmBdRzQOTQS7z9lPJyDWE0UQyphxoF6xb1FOzCkmRkGEZRH_qalwi6UGNtK1Op_F3SiZKCtADnQQPZ9-i8wpZqta4_JP8ZvU"
    ],
    "status": "Available",
    "rentPerMonth": 135,
    "price": 600,
    "addedDate": "2025-01-28T10:55:00.000Z"
  },
  {
    "_id":"08",
    "ownerId": "USR_108",
    "title": "Dune",
    "author": "Frank Herbert",
    "category": "Sci-Fi",
    "description": "A legendary epic and one of the greatest science-fiction novels ever written. Set in a distant future, it follows Paul Atreides and his journey amid political conflict, power struggles, and survival challenges on the desert planet Arrakis. Themes of ecology, destiny, religion, and leadership are deeply explored.",
    "coverImagePaths": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcAynkfDnHj_pS8jfwuKEEBW9EeFDWhch-Nggogup6CiBiSF-PtRcqupLxadzUVOlnG72_kPeT46rOcI-qbPX5yCDjPo-RcN6jOo8tOebto2W8zwIz8E7H69-zL8xs6XL1VuDLO0-oeyO9TVGE-uWelExEfSGRxtGb36xD7oIIO0sJ0OSK-7M2fV9hsEMfuJHno3UFPsrxrcTsaZzI7HkXMMBWa7oukts9bP7klVv-I2aPomq2SFsGdY4QTY_nbm2lZjmTVJKRaJ8"
    ],
    "status": "Available",
    "rentPerMonth": 180,
    "price": 800,
    "addedDate": "2025-01-29T16:12:00.000Z"
  }
]


  baseUrl='http://localhost:3000/books'
  baseUrl2='http://localhost:3000/requests'
  constructor(private http:HttpClient) {
         http.get(this.baseUrl).subscribe((data)=>{
          const dbBooks=data as BookDetails[];
          for(let book of dbBooks )
                this.books.push(book);
         })
   }

   getMyBooks(){
      return this.http.get(this.baseUrl+'/my-books');
   }

   getBorrowRequest(){
      return this.http.get(this.baseUrl2+'/my-requests');
   }

   getIncomingRequest(){
    return this.http.get(this.baseUrl2+'/received');
   }
   
   getName(id:string){
      return this.http.get(this.baseUrl2+'/user/'+id);
   }

   getBookName(bookId:string){
      return this.http.get(this.baseUrl2+'/book/'+bookId);
   }

   addBook(bookData:any){
    return this.http.post(this.baseUrl+'/add',bookData);
   }

   makeRequest(myRequest:Request){
    return this.http.post(this.baseUrl2+'/create',myRequest);
   }

   getRequest(id:String){
     return this.http.get(this.baseUrl2+'/my-requests/'+id);
   } 
   
}
