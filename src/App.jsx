import './App.css';
import Card from './components/Card';

const App = () => {
  return (
    <div className="App">
      <h1>👉🏻Milk Tea Gems in Orange County👈🏻</h1>
      <h3>Discover the best milk tea shops in Orange County!🧋🍵</h3>
      <div className="card-container">
        <Card image="https://static.heytea.com/web/Fh6VaTq0H8ezAIZ6Re63q3SWdhuJ.png" name="HEYTEA" location="Irvine"/>
        <Card image="https://images.editor.website/uploads/b/a1ba4b60-6ae4-11ea-8ede-b74da4a3d773/IMG_7665.JPG?width=400" name="OMOMO TEA SHOPPE" location="Tustin, Irvine"/>
        <Card image="https://static.where-e.com/United_States/Jam-Jam-Tea-Lab_b140f50a25210de8c7e4c9ccd488c152.jpg" name="Jam Jam Tea Lab" location="Irvine"/>
        <Card image="https://platform.sandiego.eater.com/wp-content/uploads/sites/25/chorus/uploads/chorus_asset/file/25725632/boba_1.jpg?quality=90&strip=all&crop=0,0,100,100"name="3CAT" location="Irvine"/>
        <Card image="https://s3-media0.fl.yelpcdn.com/bphoto/HXuysH3avJ9fqakfoDlH6Q/348s.jpg" name="Nook" location="Costa Mesa"/>
        <Card image="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/65df59aa-9df8-4051-b05f-4168eb4a2025.jpg" name="Molly Tea" location="Los Angeles"/>
        <Card image="https://mocoshow.com/wp-content/uploads/2025/10/IMG_2199-997x1024.jpeg" name="Chahalo" location="City of Industry"/>
        <Card image="https://static.wixstatic.com/media/0ee021_b55817e5e189427ea0f25ea6153ff94e~mv2.jpg/v1/fill/w_640,h_458,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0ee021_b55817e5e189427ea0f25ea6153ff94e~mv2.jpg" name="Hechalou" location="Long Beach"/>
        <Card image="https://0605eb08f229e7f743a1.cdn6.editmysite.com/uploads/b/0605eb08f229e7f743a1d1fd96de91fdcde2f15cb4e65f73a0b60c655ddc59c6/IMG_8761_1686943496.jpg?width=2400&optimize=medium" name="Unu Cafe" location="Garden Grove"/>
        <Card image="https://cdn.corner.inc/place-photo/AWn5SU6W5Wue3U1CvA_0-pLdM319PqjtoG_OOW4DwsqLWVXMBkupqWGu00M2q_fep0U-Gm8f4vpzbsja2jZ8VlOlZ0-A2lgfU8Ng4g8Ush9J1HN6WPhDK_xwNs5LdJ2MU-Q7JUCdfmJ9F638NJge3exC0f3JoTMFXxXrVWmeTYmuBm_YxISOO1AX2h6Mx3d37xL7lAU0yKMVIItUHILMeO4D50nZ-FpD2wwZoh21I-G11N6b49KM5CqrkStiIxeqpXZutqRNT17GLU8E9jU4ITR-bSLFaBsVZ758zSkQzjE5rHqTBO0cxwZDoolDng9quy4vbLFnvh6ETtMM3ioc1q8hS3NVHNnTLuIQL-RHr7tzJ-w1im8l0VWve-hBGsXSAP6awDEe0YVVU0ou7t3s8C3fUZ8eZ2jdDXGa9Y4Igaaqu3-zFQ.jpeg" name="Airoma" location="Garden Grove"/>
      </div>
    </div>
  )
}

export default App