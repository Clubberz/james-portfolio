<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>James Clubley - Mechanical Engineer</title>
<style>
    body {
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
        color: white;
    }
    header {
        background-color: #b30000;
        padding: 15px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
    }
    header h1 {
        margin: 0;
        font-size: 1.5em;
    }
    nav a {
        color: white;
        margin: 0 15px;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s;
    }
    nav a:hover {
        color: #ffcccc;
    }
    .hero {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 20px;
        background: url('img/bg-pattern.png') repeat, radial-gradient(circle at center, rgba(179, 0, 0, 0.5), transparent);
    }
    .hero h2 {
        font-size: 3em;
        margin-bottom: 10px;
        color: #ff3333;
    }
    .hero p {
        font-size: 1.2em;
        max-width: 700px;
        line-height: 1.5;
    }
    section {
        padding: 80px 20px;
        max-width: 1100px;
        margin: auto;
    }
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
    }
    .gallery img {
        width: 100%;
        border-radius: 8px;
        border: 3px solid #b30000;
        transition: transform 0.3s, box-shadow 0.3s;
    }
    .gallery img:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 20px #ff3333;
    }
    footer {
        text-align: center;
        padding: 20px;
        background: #111;
        color: #777;
        margin-top: 50px;
    }
</style>
</head>
<body>

<header>
    <h1>James Clubley</h1>
    <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>
</header>

<div class="hero" id="about">
    <h2>Mechanical Engineer @ Rice</h2>
    <p>Specializing in FEA • CAD • Prototyping with experience in ANSYS, SolidWorks, MATLAB, and Python. Passionate about aerospace, motorsport, and marine systems.</p>
</div>

<section id="projects">
    <h2>Projects</h2>
    <div class="gallery">
        <img src="img/project1.png" alt="FEA Project 1">
        <img src="img/project2.png" alt="FEA Project 2">
        <img src="img/project3.png" alt="FEA Project 3">
        <img src="img/project4.png" alt="FEA Project 4">
        <img src="img/project5.png" alt="FEA Project 5">
        <img src="img/motorcycle.png" alt="BMW K100 Custom Motorcycle">
    </div>
</section>

<section id="contact">
    <h2>Contact</h2>
    <p>Email: <a href="mailto:jamesclubley@gmail.com" style="color:#ff3333;">jamesclubley@gmail.com</a></p>
    <p>LinkedIn: <a href="#" style="color:#ff3333;">LinkedIn Profile</a></p>
    <p>GitHub: <a href="#" style="color:#ff3333;">GitHub Profile</a></p>
</section>

<footer>
    <p>© 2025 James Clubley. All Rights Reserved.</p>
</footer>

</body>
</html>
