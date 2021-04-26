const stop = ["a", '', "acaba", "acep", "adamakıllı", "adeta", "ait", "altmýþ", "altmış", "altý", "altı", "ama", "amma", "anca", "ancak", "arada", "artýk", "aslında", "aynen", "ayrıca", "az", "açıkça", "açıkçası", "bana", "bari", "bazen", "bazý", "bazı", "başkası", "baţka", "belki", "ben", "benden", "beni", "benim", "beri", "beriki", "beþ", "back", "beş", "beţ", "bilcümle", "bile", "bin", "binaen", "binaenaleyh", "bir", "biraz", "birazdan", "birbiri", "birden", "birdenbire", "biri", "birice", "birileri", "birisi", "birkaç", "birkaçı", "birkez", "birlikte", "birçok", "birçoğu", "birþey", "birþeyi", "birşey", "birşeyi", "birţey", "bitevi", "biteviye", "bittabi", "biz", "bizatihi", "bizce", "bizcileyin", "bizden", "bize", "bizi", "bizim", "bizimki", "bizzat", "boşuna", "bu", "buna", "bunda", "bundan", "bunlar", "bunları", "bunların", "bunu", "bunun", "buracıkta", "burada", "buradan", "burası", "böyle", "böylece", "böylecene", "böylelikle", "böylemesine", "böylesine", "büsbütün", "bütün", "cuk", "cümlesi", "da", "daha", "dahi", "dahil", "dahilen", "daima", "dair", "dayanarak", "de", "defa", "dek", "demin", "demincek", "deminden", "denli", "derakap", "derhal", "derken", "deđil", "değil", "değin", "diye", "diđer", "diğer", "diğeri", "doksan", "dokuz", "dolayı", "dolayısıyla", "doğru", "dört", "edecek", "eden", "ederek", "edilecek", "ediliyor", "edilmesi", "ediyor", "elbet", "elbette", "elli", "emme", "en", "enikonu", "epey", "epeyce", "epeyi", "esasen", "esnasında", "etmesi", "etraflı", "etraflıca", "etti", "ettiği", "ettiğini", "evleviyetle", "evvel", "evvela", "evvelce", "evvelden", "evvelemirde", "evveli", "eđer", "eğer", "fakat", "filanca", "gah", "gayet", "gayetle", "gayri", "gayrı", "gelgelelim", "gene", "gerek", "gerçi", "geçende", "geçenlerde", "gibi", "gibilerden", "gibisinden", "gine", "göre", "gırla", "hakeza", "halbuki", "halen", "halihazırda", "haliyle", "handiyse", "hangi", "hangisi", "hani", "hariç", "hasebiyle", "hasılı", "hatta", "hele", "hem", "henüz", "hep", "hepsi", "her", "herhangi", "herkes", "herkesin", "herşey", "hiç", "hiçbir", "hiçbiri", "hoş", "hulasaten", "iken", "iki", "ila", "ile", "ilen", "ilgili", "ilk", "illa", "illaki", "icon", "imdi", "indinde", "inen", "insermi", "ise", "ister", "itibaren", "itibariyle", "itibarıyla", "iyi", "iyice", "iyicene", "için", "iş", "işte", "iţte", "kadar", "kaffesi", "kah", "kala", "kanýmca", "karşın", "katrilyon", "kaynak", "kaçı", "kelli", "kendi", "kendilerine", "kendini", "kendisi", "kendisine", "kendisini", "kere", "kez", "keza", "kezalik", "keşke", "keţke", "ki", "kim", "kimden", "kime", "kimi", "kimisi", "kimse", "kimsecik", "kimsecikler", "külliyen", "kýrk", "kýsaca", "kırk", "kısaca", "lakin", "leh", "lütfen", "maada", "madem", "mademki", "mamafih", "mebni", "međer", "meğer", "meğerki", "meğerse", "milyar", "milyon", "mu", "mü", "mý", "mı", "nasýl", "nasıl", "nasılsa", "nazaran", "naşi", "ne", "neden", "nedeniyle", "nedenle", "nedense", "nerde", "nerden", "nın", "nerdeyse", "nere", "nerede", "nereden", "neredeyse", "neresi", "nereye", "netekim", "neye", "neyi", "neyse", "nice", "nihayet", "nihayetinde", "nitekim", "niye", "niçin", "o", "olan", "olarak", "oldu", "olduklarını", "oldukça", "olduğu", "olduğunu", "olmadı", "olmadığı", "olmak", "olması", "olmayan", "olmaz", "olsa", "olsun", "olup", "olur", "olursa", "oluyor", "on", "ona", "onca", "onculayın", "onda", "ondan", "onlar", "onlardan", "onlari", "onlarýn", "onları", "onların", "onu", "onun", "oracık", "oracıkta", "orada", "oradan", "oranca", "oranla", "oraya", "otuz", "oysa", "oysaki", "pek", "pekala", "peki", "pekçe", "peyderpey", "rağmen", "sadece", "sahi", "sahiden", "sana", "müh", "sanki", "sekiz", "seksen", "sen", "senden", "seni", "senin", "siz", "sizden", "sizi", "sizin", "son", "sonra", "sonradan", "sonraları", "sonunda", "tabii", "tam", "tamam", "tamamen", "tamamıyla", "tarafından", "tek", "trilyon", "tüm", "var", "vardı", "vasıtasıyla", "ve", "velev", "velhasıl", "velhasılıkelam", "veya", "veyahut", "ya", "yahut", "yakinen", "yakında", "yakından", "yakınlarda", "yalnız", "yalnızca", "yani", "yapacak", "yapmak", "yaptı", "yaptıkları", "yaptığı", "yaptığını", "yapılan", "yapılması", "yapıyor", "yedi", "yeniden", "yenilerde", "yerine", "yetmiþ", "yetmiş", "yetmiţ", "yine", "yirmi", "yok", "yoksa", "yoluyla", "yüz", "yüzünden", "zarfında", "zaten", "zati", "zira", "class", "çabuk", "çabukça", "çeşitli", "çok", "çokları", "çoklarınca", "çokluk", "çoklukla", "çokça", "çoğu", "çoğun", "çoğunca", "çoğunlukla", "çünkü", "öbür", "öbürkü", "öbürü", "önce", "önceden", "önceleri", "öncelikle", "öteki", "ötekisi", "öyle", "öylece", "öylelikle", "öylemesine", "öz", "üzere", "üç", "þey", "þeyden", "þeyi", "þeyler", "þu", "þuna", "þunda", "þundan", "þunu", "şayet", "şey", "şeyden", "şeyi", "şeyler", "şu", "şuna", "şuncacık", "şunda", "şundan", "şunlar", "şunları", "şunu", "şunun", "şura", "şuracık", "şuracıkta", "şurası", "şöyle", "ţayet", "ţimdi", "ţu", "ţöyle", "a's", "able", "about", "above", "according", "accordingly", "across", "actually", "after", "afterwards", "again", "against", "ain't", "all", "allow", "allows", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "an", "and", "another", "any", "anybody", "anyhow", "anyone", "anything", "anyway", "anyways", "anywhere", "apart", "appear", "appreciate", "appropriate", "are", "aren't", "around", "as", "aside", "ask", "asking", "associated", "at", "available", "away", "awfully", "b", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "believe", "below", "beside", "besides", "best", "better", "between", "beyond", "both", "brief", "but", "by", "c", "c'mon", "c's", "came", "can", "can't", "cannot", "cant", "cause", "causes", "certain", "certainly", "changes", "clearly", "co", "com", "come", "comes", "concerning", "consequently", "consider", "considering", "contain", "containing", "contains", "corresponding", "could", "couldn't", "course", "currently", "d", "definitely", "described", "despite", "did", "didn't", "different", "do", "does", "doesn't", "doing", "don't", "done", "down", "downwards", "during", "e", "each", "edu", "eg", "eight", "either", "else", "elsewhere", "enough", "entirely", "especially", "et", "etc", "even", "ever", "every", "everybody", "everyone", "everything", "everywhere", "ex", "exactly", "example", "except", "f", "far", "few", "fifth", "first", "five", "followed", "following", "follows", "for", "former", "formerly", "forth", "four", "from", "further", "furthermore", "g", "get", "gets", "getting", "given", "gives", "go", "goes", "going", "gone", "got", "gotten", "greetings", "h", "had", "hadn't", "happens", "hardly", "has", "hasn't", "have", "haven't", "having", "he", "he's", "hello", "help", "hence", "her", "here", "here's", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "hi", "him", "himself", "his", "hither", "hopefully", "how", "howbeit", "however", "i", "i'd", "i'll", "i'm", "i've", "ie", "if", "ignored", "immediate", "in", "inasmuch", "inc", "indeed", "indicate", "indicated", "indicates", "inner", "insofar", "instead", "into", "inward", "is", "isn't", "it", "it'd", "it'll", "it's", "its", "itself", "j", "just", "k", "keep", "keeps", "kept", "know", "known", "knows", "l", "last", "lately", "later", "latter", "latterly", "least", "less", "lest", "let", "let's", "like", "liked", "likely", "little", "look", "looking", "looks", "ltd", "m", "mainly", "many", "may", "maybe", "me", "mean", "meanwhile", "merely", "might", "more", "moreover", "most", "mostly", "much", "must", "my", "myself", "n", "name", "namely", "nd", "near", "nearly", "necessary", "need", "needs", "neither", "never", "nevertheless", "new", "next", "nine", "no", "nobody", "non", "none", "noone", "nor", "normally", "not", "nothing", "novel", "now", "nowhere", "o", "obviously", "of", "off", "often", "oh", "ok", "okay", "old", "on", "once", "one", "ones", "only", "onto", "or", "other", "others", "otherwise", "ought", "our", "ours", "ourselves", "out", "outside", "over", "overall", "own", "p", "particular", "particularly", "per", "perhaps", "placed", "please", "plus", "possible", "presumably", "probably", "provides", "q", "que", "quite", "qv", "r", "rather", "rd", "re", "really", "reasonably", "regarding", "regardless", "regards", "relatively", "respectively", "right", "s", "said", "same", "saw", "say", "saying", "says", "second", "secondly", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sensible", "sent", "serious", "seriously", "seven", "several", "shall", "she", "should", "shouldn't", "since", "six", "so", "some", "somebody", "somehow", "someone", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "specified", "specify", "specifying", "still", "sub", "such", "sup", "sure", "t", "t's", "take", "taken", "tell", "tends", "th", "than", "thank", "thanks", "thanx", "that", "that's", "thats", "the", "their", "theirs", "them", "themselves", "then", "thence", "there", "there's", "thereafter", "thereby", "therefore", "therein", "theres", "thereupon", "these", "they", "they'd", "they'll", "they're", "they've", "think", "third", "this", "thorough", "thoroughly", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "took", "toward", "towards", "tried", "tries", "truly", "try", "trying", "twice", "two", "u", "un", "under", "unfortunately", "unless", "unlikely", "until", "unto", "up", "upon", "us", "use", "used", "useful", "uses", "using", "usually", "uucp", "v", "value", "various", "very", "via", "viz", "vs", "w", "want", "wants", "was", "wasn't", "way", "we", "we'd", "we'll", "we're", "we've", "welcome", "well", "went", "were", "weren't", "what", "what's", "whatever", "when", "whence", "whenever", "where", "where's", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "who's", "whoever", "whole", "whom", "whose", "why", "will", "willing", "wish", "with", "within", "without", "won't", "wonder", "would", "wouldn't", "x", "y", "yes", "yet", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves", "z", "zero"];

function stopWordClear(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (stop.indexOf(arr[i]) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


module.exports = stopWordClear;