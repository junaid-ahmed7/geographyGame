const Footer = () => {
  return (
    <footer className="text-center py-4">
                <p className="text-lg text-gray-300 mb-6">
          For any ideas or requests, please email:{" "}
          <a
            href="mailto:junaid7ahmed96@gmail.com"
            className="text-emerald-400 hover:underline"
          >
            junaid7ahmed96@gmail.com
          </a>
        </p>
      <div className="flex justify-center items-center">
        <p className="text-gray-500">
          &copy; 2023. No rights reserved. Made with &#128154;
        </p>
        <a
          href="https://github.com/junaid-ahmed7/geographyGame"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-gray-500 hover:text-gray-700 font-semibold"
        >
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
