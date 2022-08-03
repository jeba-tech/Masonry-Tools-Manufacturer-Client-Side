import React from 'react';

const Footer = () => {
      return (
            <footer className="footer footer-center p-10 bg-neutral text-neutral-content rounded">
                  <div className="grid grid-flow-col gap-4">
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Product</a>
                        <a className="link link-hover">Blogs</a>
                  </div>

                  <div>
                        <p>Copyright © 2022 - All right reserved by Mason House</p>
                  </div>
            </footer>
      );
};

export default Footer;