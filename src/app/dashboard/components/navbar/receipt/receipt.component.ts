import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { jsPDF } from "jspdf";

pdfMake.vfs = pdfFonts
@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
  form: any;
  leases: Array<string> = [];

  constructor(private receiptService: LoginServiceService, private fb: FormBuilder) { }
  ngOnInit(): void {

    this.createForm();
    // this.receiptService.GetLeases(localStorage.getItem('userID')).subscribe({
    //   next: response => {
    //     for (let i = 0; i < response.length; i++) {
    //       this.leases.push(response[i].addres);

    //     }
    //   }
    // })
  }

  showModal(): void {
    this.isVisible = true;
  }



  handleCancel(): void {
    this.isVisible = false;
  }
  private createForm() {
    this.form = this.fb.group({

      tenant: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      owner: [null, [Validators.required]],
      period: [null, [Validators.required]],
      paidAmount: [null, [Validators.required]],
      adress: [null],
    });
  }
  OnCreatePdf() {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
    let info = this.form.getRawValue();
    const doc = new jsPDF();
    var content = "Para locatario";

    // Set font size and style
    doc.setFontSize(12);
    doc.setFont("times", "normal");

    // Add text to the PDF
    doc.text(content, 80, 20);

    // Add separator line
    doc.line(10, 30, 200, 30);
    let formatedMonth = info.period.getMonth();
    let formatedYear = info.period.getFullYear();
    console.log(formatedMonth);
    console.log(formatedYear);
    doc.text(`Recibi del Sr/a.: ${info.tenant} la suma de PESOS $${info.amount} en concepto
     de cobro de alquiler correspondiente al periodo de ${formatedMonth + 1} ${formatedYear} 
     por el inmueble ubicado en ${info.adress}`, 10, 40);


    doc.line(10, 80, 200, 80);

    // Add total, pagado, and resta information
    doc.text(`Total a pagar: $${info.amount}`, 10, 90);
    doc.text(`Pagado: $${info.paidAmount}`, 10, 100);

    let leftToPay = info.amount - info.paidAmount;
    doc.text(`Resta: $${leftToPay}`, 10, 110);

    // Add signature and clarification


    doc.line(10, 135, 200, 135);

    doc.text("Firma y aclaracion", 10, 140);

    // Save the PDF with a specific name
    doc.save("example.pdf");
  }

}
