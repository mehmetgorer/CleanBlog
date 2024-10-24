
Clean Blog
Clean Blog, kullanıcıların blog yazıları oluşturabileceği, okuyabileceği, güncelleyebileceği ve silebileceği basit ve dinamik bir blog platformudur. Proje, arka uç için Node.js ve Express kullanılarak geliştirilmiştir ve dinamik web sayfalarını render etmek için EJS (Embedded JavaScript) şablon motoru kullanılmıştır.

Projenin Özellikleri
Blog Yazma: Kullanıcılar başlık, içerik ve meta bilgileriyle blog yazıları oluşturabilir.
Dinamik İçerik: Yeni eklenen yazılar anasayfada yazar ve yayınlanma tarihi bilgisiyle birlikte görüntülenir.
Yazı Yönetimi: Var olan blog yazıları düzenlenebilir veya silinebilir.
Duyarlı Tasarım: Mobil uyumlu ve farklı ekran boyutlarına adapte olabilen bir tasarıma sahiptir.
Kullanılan Teknolojiler
Node.js: Arka uç için kullanılan çalışma ortamı.
Express.js: Sunucu tarafı yönlendirme ve istekleri işlemek için kullanılan web çatısı.
EJS (Embedded JavaScript): Dinamik web içeriğini render etmek için kullanılan şablon motoru.
MongoDB (isteğe bağlı): Kullanılırsa, blog yazılarını ve kullanıcı verilerini depolamak için kullanılan NoSQL veritabanı.
CSS Çatısı (Bootstrap/Özel): Ön yüzü şekillendirmek ve temiz, duyarlı bir tasarım sağlamak için kullanılan stil araçları.
Kurulum
Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

Depoyu Klonlayın

bash
git clone https://github.com/mehmetgorer/cleanblog.git
Bağımlılıkları Yükleyin

Proje dizinine gidin ve gerekli bağımlılıkları yükleyin:

bash
cd clean-blog
npm install
Veritabanı Ayarları (İsteğe Bağlı)

Eğer MongoDB gibi bir veritabanı kullanıyorsanız, bağlantı ayarlarını yapılandırma dosyasında güncelleyin.

Uygulamayı Başlatın

Sunucuyu başlatmak için:

bash
npm start
Uygulama varsayılan olarak http://localhost:3000 adresinde erişilebilir olacaktır.

Proje Yapısı
Projenin ana dizinleri şunlardır:

views/: EJS şablon dosyalarını içerir.
routes/: Sunucu tarafı rota işleyicilerini barındırır.
public/: CSS, JavaScript ve resim gibi statik dosyaları içerir.
models/ (eğer veritabanı kullanılıyorsa): Veritabanı modelleri ve şemalarını içerir.
Gelecek Geliştirmeler
Kullanıcı Kimlik Doğrulama: Blog yazılarını yönetmek için kullanıcı hesapları eklenmesi.
Yorum Bölümü: Okuyucuların blog yazılarına yorum yapabilmesi.
Arama Fonksiyonu: Yazıları anahtar kelime veya etiketlere göre filtrelemek için arama özelliği.
Etiketleme Sistemi: Yazıları daha iyi organize edebilmek için etiketlerle kategorize etme imkanı.
Ekran Görüntüleri


### 1.
![](https://github.com/mehmetgorer/CleanBlog/blob/main/CleanBlogSS/CBS1.png).

### 2. 
![](https://github.com/mehmetgorer/CleanBlog/blob/main/CleanBlogSS/CBS2.png).

### 3. 
![](https://github.com/mehmetgorer/CleanBlog/blob/main/CleanBlogSS/CBS3.png).

### 4. 
![](https://github.com/mehmetgorer/CleanBlog/blob/main/CleanBlogSS/CBS4.png).

### 5. 
![](https://github.com/mehmetgorer/CleanBlog/blob/main/CleanBlogSS/CBS5.png).



Clean Blog
Clean Blog is a simple and dynamic blog platform where users can create, read, update, and delete blog posts. The project is built using Node.js and Express for the backend and utilizes the EJS (Embedded JavaScript) template engine for rendering dynamic web pages.

Project Features
Blog Writing: Users can create blog posts with titles, content, and meta information.
Dynamic Content: Newly added posts are displayed on the homepage along with the author and publication date.
Post Management: Existing blog posts can be edited or deleted.
Responsive Design: Features a design that is mobile-friendly and adapts to various screen sizes.
Technologies Used
Node.js: The runtime environment for the backend.
Express.js: The web framework used for server-side routing and handling requests.
EJS (Embedded JavaScript): The template engine used to render dynamic web content.
MongoDB (optional): A NoSQL database used to store blog posts and user data if implemented.
CSS Framework (Bootstrap/Custom): Styling tools used to shape the frontend and provide a clean, responsive design.
Installation
To run the project on your local environment, follow these steps:

Clone the Repository

bash
git clone https://github.com/mehmetgorer/cleanblog.git
Install Dependencies

Navigate to the project directory and install the necessary dependencies:

bash
cd clean-blog
npm install
Database Settings (Optional)

If using a database like MongoDB, update the connection settings in the configuration file.

Start the Application

To start the server:

bash
npm start
The application will be accessible at http://localhost:3000 by default.

Project Structure
The main directories of the project are as follows:

views/: Contains EJS template files.
routes/: Hosts server-side route handlers.
public/: Includes static files like CSS, JavaScript, and images.
models/ (if using a database): Contains database models and schemas.
Future Developments
User Authentication: Adding user accounts for managing blog posts.
Comment Section: Allowing readers to comment on blog posts.
Search Functionality: Implementing a search feature to filter posts by keywords or tags.
Tagging System: Providing the ability to categorize posts with tags for better organization.


