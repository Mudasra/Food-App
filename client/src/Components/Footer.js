const Footer = () => {
  console.log("footer rendered");
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>@ 2025 Food Panda. All right reserved</p>
        <div className="footer-links">
          <a href="">Privacy policy</a>
          <a href="">Terms of service</a>
          <a href="">Help</a>
        </div>
      </div>
    </footer>
  )
} 

export default Footer;