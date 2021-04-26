# WEB İNDEXLEME UYGULAMASI

Proje iki kısımdan oluşmaktadır; frontend ve backend. Frontend kısmında, Html, Css, Semantik ui react, ReactJs kullanılmıştır. Backend kısmında ise NodJs, ExpressJs altında webden veri çekmek için Puppeteer kütüphanesi kullanılmıştır.

## 1.SAYFADA GEÇEN KELİMELERİN FREKANSLARINI HESAPLAMA
Bu bölüm de istenen ön yüzden girilen bir Url adresi içeriğindeki kelimeleri çıkaran ve bu kelimelerin sayfa içeriğinde kaçar adet geçtiğini hesaplayarak kullanıcıya gösteren bir tasarım ve bu tasarıma ait kodlamayı yapmaktır. 

### 1.1.FrontEnd Bölümü
Uygulamanın ön yüzünde kullanıcının Url adresi girmesi için bir input ve girilen url e ait bilgileri getirecek “Veri Çek” isimli buton ekledik.
Butona tıkladıktan sonra aşağıda görüldüğü gibi sayfadaki kelimeler ve sayfada kaç adet bulunduğu listelenmektedir. Bu kısımda tüm kelimeler hiç bir ayrım gözetmeden listeleniyor ve sayfada kaç tür kelime olduğunuda tablonun başındaki (448) rakamıyla görebiliyoruz.

Frontend kısmı ReactJs framework kullanılarak tasarlanmıştır. REST API istekleri **axios** kütüphanesi kullanılarak yapılmıştır. Tasarımında ise semantic-ui kütüphanesi kullanılmıştır.

![img-1](https://user-images.githubusercontent.com/48925129/116057606-a3924500-a687-11eb-8103-f865e951e362.png)


### 1.2.BackEnd Bölümü
Bu bölümde webden veri kazıma işlemi ve kazınan verinin düzenlenmesi için gerekli kodlamalar yapıldı. 
Web den veri kazımak için **Puppeteer** kütüphanesini kullandık. Araştırmalarımız neticesinde NodeJs de web den veri çekmek için bir kaç yöntem olduğunu gördük. Bunları **Request, Cheerio ve Puppeteer** olarak listeleyebiliriz. 
Puppeteer kütüphanesini özellikle seçmemizin sebebi; günümüz web sitelerinin bazı kısımları javascript ile oluşturulan dinamik html etiketleri içermektedir. Birçok web kazıma yönteminin bu etiketleri okuyamadığını gördük. **Puppeteer** ise bu etiketlerin içeriğini de çok rahat okuyor olması tercih sebebimiz olmuştur.

