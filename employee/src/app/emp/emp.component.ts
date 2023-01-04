import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent  {

  constructor() { }
  isShowDivIf = false;  
    
  toggleDisplayDivIf() {  
    this.isShowDivIf = !this.isShowDivIf;  
  }

  /*onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }*/
   
  array:any =[
    {Name:"A",Address:"pune",MobileNo:9865446},
{Name:"B",Address:"mumbai",MobileNo:98645546}
  ];
  tabKey:any = [];
  tabValue:any = [];
  getData(){
    this.array.array.forEach((element:any) => {
console.log(element)

      
    });
  }
}
  
  


