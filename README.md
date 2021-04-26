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


### 2.2.BackEnd Bölümü

#### 2.2.1.Anahtar Kelime Bulma Yöntemi

Bilindiği üzere bir web sayfasında kullanılan etiketlerin önem sıraları vardır ve bu etiketler içerisinde kullanılan metinler etiketten kaynaklı derecelere haiz olur.
 Örnek vermek gerekirse <h1> etiketi ana başlıkları oluşturur, ana başlıklar da bir sayfa için önemli olan kelimeleri içerir. Aynı zamanda SEO çalışmalarında da bu etiketin yeri ayrıdır. Yine <title> etiketi bir sayfayı tanımlayan en önemli kelimeleri içerir. 
Biz de bu düşünceden yola çıkarak “fetchData” fonksiyonunda görüldüğü gibi metin taşıyan etiketlere 1-10 arasında rakam değerleri verdik. Sonrasında kelime hangi etiketten çıktı ise etiketin score değeri ile bu etiketten çıkan kelime sayını çarptık ve kelimenin scorunu oluşturduk. 
Bu şekilde tüm etiketlerden gelen kelimeler ayrı ayrı score değerleriyle listelenmiş oldu. 
Aynı kelime farklı etiketlerde de geçme ihtimali olduğu için sonrasında bir işlem daha yaparak aynı kelimelerin score değerlerini topladık ve bu kelime grubunu en yüksek scordan küçüğüne doğru sıraladık. Sonuş olarak elimizde aşağıdaki gibi bir anahtar kelime objesi oluşmuş oldu. 
  
## 3.İKİ SAYFA ARASINDAKİ BENZERLİK SKORLAMASI

Bu kısımda bizden istenen girilen iki Url için benzer kelimeleri bulma ve kendi üreteceğimiz teknikler ile benzerlik scoru oluşturmaktır.

#### 3.1.FrontEnd Bölümü
Aşağıda bu sayfanın tasarımı görülmektedir. Bu sefer iki Url alanı oluşturuldu. Öncelikli olarak “Veri Çek” butonu ile iki Url bilgisi backend’e gönderildi. Burada Url gönderme işlemi ve dönen datayı alma işlemi birinci ve ikinci sorulardaki aynı yöntemler kullanılarak yapılmıştır. Üstteki sorulardan farklı olarak Backend den gelen data bu sefer iki adet object dir ve bu objeler karşılaştırılarak benzer kelilemeri bulduk.
Veriler çekildikten sonra aktif olan “Benzerlik Bul” butonu ile benzer kelimeleri FrontEnd tarafında bularak en sağdaki üçüncü tabloyu listeledik. Bu tabloda iki Url de geçen aynı kelimerin score değerleri görülmektedir.
İkinci Url deki sayfanın, birinci Url deki sayfaya ne kadar benzediğini anlamak için ise 0-1 arasında değer alan “Benzerlik Scoru” kısmında gösterdik. Değer 1’e ne kadar yakınsa benzerliği o ölçüde fazladır.


![img-3](https://user-images.githubusercontent.com/48925129/116060360-7abf7f00-a68a-11eb-9b94-a0d60e80114c.png)


#### 3.1.1.Benzerlik Skoru Hesaplama

Burada önceden oluşturduğumuz her kelimenin score değerini kullandık. İki Url arasındaki benzer kelimelerin toplam scorlarını, Url2 nin toplam score değerine bölerek benzerlik scorunu hesapladık. 

## 4.SİTE İNDEXLEME VE SIRALAMA
Bu kısımda bizden istenen bir Url ile Url grubu arasında benzerlik scoru hesabı yapmaktır. Bu sayfanın tasarımı aşağıdaki gibidir.

### 4.1.FrontEnd Bölümü

Bu bölümde üstteki sorulardan farklı olarak bir Url giriş alanı, bir de Url grubu giriş alanı oluşturduk, Url grubu girişi bir input tan oluşmaktadır ve istenilen adette Url buraya aralarında virgül olacak şekilde eklenir. Eklenen bu Url eklendiği anda bir array haline dönüşür.
Bu sayfadan Rest api ile Url grubu BackEnd den istekte bulunuyor. Dönen istek sonucunda gelen değer Url lerin ayr ayrı kelime gruplarıdır. 
“Veri Çek” butonuyla veriler çekilir ve tüm Url ler altta listelenir. Her Url’e ait butona basıldığında bezerlik skorlamasını yaparak listeler.
Ekran görüntüsünden sonuçlara bakıldığında gayet gerçeğe yakın sonuçlar olduğu görülmektedir


![img-4](https://user-images.githubusercontent.com/48925129/116060758-d427ae00-a68a-11eb-9c48-a9f7e4a960b6.png)


## 5.SEMANTİK ANALİZ

Bu sayfada bir üst soruda olduğu gibi sayfa tasarımı yapıldı. 
Site indexleme sorusundan farklı olarak; BackEnd kısmında “esanlamli_tr.js” dosyası oluşturuldu. Bu dosya içerisinde Türkçe kelimelerinin eş anlamlılarını içeren bir JSON datası bulunmaktadır. 
Site indexleme sorusundaki gibi FrontEnd den istekte bulunulur, bu sefer BackEnd den gelen cevap kelimelerin eş anlamlarını da içermektedir. Site indexlemedeki gibi karşılaştırma işlemi yapılarak sonuçlar sayfaya yazdırılır.






