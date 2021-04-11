# TW-DeMo

# 1. Introduction

1.1 Purpose:
  Scopul site-ului este gestiunea vizitelor de care beneficiaza persoanele condamnate la executarea unei pedepse intr-un penitenciar.
  
1.2 Document Conventions:
  La fiecare din cele 5 puncte principale ale documentului sunt prezente subpuncte , ale caror importanta este determinata de ordinea pe cate o ocupa in cadrul
punctului(cele mai semnificative aparand primele, cele mai neimportante aparand ultimele).  
  
1.3 Intended Audience and Reading Suggestions:
   Daca un anumit cititor este interesat de un anumit subiect va trebui sa aleaga unul din cele 5 puncte , apoi va alege un subpunct, care probabil vafi cel mai relevant pentru cititor.
   
1.4 Product Scope:
  Țelul aplicatiei va fi ca prin programarile vizitelor va rezulta in castig de timp atat pentru personalul penitenciarului atat cat si pentru vizitator. De asemenea se pot evita situatii neplacute, intrucat in cazul unor prizonieri nu se poate pune problema unei vizite , sau pot fi vizitati numai de cateva persoane. 
  
1.5 References:
  Imagini ale penitenciarului si ale detinutilor.
  
# 2. Overall Description

2.1 Product Perspective:
   Motivul dezvoltarii aplicatiei este faptul ca metodele precedente de gestionare a vizitelor(prin telefon sau la fata locului) au condus la situatii neplacute.
   
2.2 Product Functions:
    Potentialii vizitatori vor completa un chestionar pentru a avea prilejul de a face o vizita unui prizonier, iar dupa ce cerinta a fost analizata de catre personalul penitenciarului , raspunsul fiind trimis prin mail.
    
2.3 User Classes and Characteristics:
    Utilizatorii vor fi persoane ce au o anumita legatura cu un detinut, deoarece in mare parte nu sunt permise vizite fara un motiv cat de cat intemeiat.
    
2.4 Operating Environment:
      
2.5 Design and Implementation Constraints:
   Cum aplicatia dezvaluie informatia precum starea psihica a condamnatilor, care se poate schimba relativ repede , site-ul va trebui modificat destul de des.
   
2.6 User Documentation:
   Nu va fi nevoie de o documentatie a utilizatorului intrucat site-ul poate fi navigat usor, iar unde este cazul sunt comentarii pentru a ajuta utilizatorul. 
   
2.7 Assumptions and Dependencies:
   Mare parte din aplicatie se poate recicla astfel incat sa avem orice site pentru gestionarea vizitelor, a livrarilor etc.
   
# 3. External Interface Requirements

3.1 User Interfaces:
   Vizitatorii vor putea accesa diferitele pagini ale aplicatiei cu ajutorul link-urilor(in cazul prizonier_x.html -> inregistrare.html) 
   si a barei de cautare(index.html -> prizonier_x.html)
   Paginile site-ului au incorporate un carousel pentru vizualizarea imaginilor intr-un mod placut si relaxant.
   
3.2 Hardware Interfaces:

3.3 Software Interfaces:

3.4 Communications Interfaces:
   Utilizatorul va trimite chestionarul completat prin e-mail, si tot prin e-mail va prime raspunsul.

# 4. System Features

4.1 Carousel
   Importanta: Scazuta
   
   Avem posibilitatea de a accesa imagini ascunse cu ajutorul sagetilor si butoanelor.
      

