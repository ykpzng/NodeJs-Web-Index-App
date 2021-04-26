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

#### 1.2.1.“fetchData” Fonksiyonu
“fetchData” ismiyle oluşturduğumuz bu fonksiyonu bütün data çekme işlemlerinde kullanacağız. Bu fonksiyonda her etiket için ayrı bir score değeri verildik. Bu kısım Anahtar kelime kısmında detaylı anlatılacaktır.
“fetchData” fonksiyonunu Promise ile yazdık çünkü veri çekme işlemleri bir zaman aşımı oluşturacağı için javascriptte bu asenkronize işlemi aşmanın yolu Promise kullanılarak çözülüyor.

#### 1.2.2.“editData” Fonksiyonu
“fetchData” fonksiyonu ile webden çekilen ham veriyi işlediğimiz “editData” fonksiyonu oluşturduk. Bu fonksiyon ile bize gelen veriyi kelimelere ayırdık ve gelen data içerisindeki birçok fazlalık simgeleri temizledik. 
Temizlene datayı  **{key: "çalıştır", val: 2, score: 16}** bu şekilde object içerisinde depolayarak ön yüzden gelen isteklere gönderilmek üzere hazır hale getirdik.
“stopWordClear” fonksiyonunu bu sayfada kullanarak anahtar kelime seçimlerinde ilgisiz kelimelerin listeden atılmasını sağladık. Bu fonksiyonun kodları uzun olduğu için rapora eklemedik.

#### 1.2.3.“rootFrekans.js” Dosyası
Hazırlanan objeyi FrontEnd isteklerine cevap olarak gönderen “rootFrekans.js” dosyamızın içeriği aşağıdaki gibidir. Bu sayfada “fetchData” fonksiyonunu çağırdık ve bu fonksiyon içerisinde de “editData” fonksiyonunu çağırdık. “fetchData” ve “editData” fonksiyonlarının işlevlerini yukarda anlatmıştım. FrontEnd’den Rest Api çağrısı ile gönderilen “Url” bilgisi “Post” metodu ile alınıyor, “fetchData” fonksiyonuna bu “url” bilgisi verilerek dönen data FrontEnd’te karşılanıp üstte anlatıldığı şekilde sayfa da kullanılıyor.

## 2.SAYFADA GEÇEN KELİMELERDEN ANAHTAR KELİME ÇIKARMA
Bu bölümde ise belirleyeceğimiz kriterler doğrultusunda sayfadan anahtar kelime çıkarma işlemi olacaktır.

### 2.1.FrontEnd Bölümü
Aşağıdaki sayfa tasarımı yapılarak inputtan çekilen Url aynen frekans hesaplama kısmındaki gibi Rest Api ile Backend’e gönderiliyor. Geri dönen data ise bu sayfada tablo içerisinde listeleniyor. Bu bölümde frekanstan farklı olarak birde **“score”** değerini görmekteyiz. Her kelimenin kelimeye özel sayfa içi score değerlendirmesi yapılmıştır.

![img-2](https://user-images.githubusercontent.com/48925129/116059992-1f8d8c80-a68a-11eb-9362-5617518e123a.png)



