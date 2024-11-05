const Footer = () => {
    return (
        <div className="bg-gray-800 text-white py-3">
            <div className="mx-auto max-w-7xl px-6 sm:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
                    <div className="flex items-center">
                        <span className="font-bold text-sm">Vinicyus Cueto - 2024</span>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-end items-center">
                        <a href="https://www.linkedin.com/in/vinicyuscueto/" className="flex items-center font-bold text-white rounded-md px-3 py-2 hover:bg-gray-700">
                            <i className="bx bxl-linkedin text-sm mr-2"></i><span className="text-sm">LinkedIn</span></a>
                        <a href="https://github.com/vinicyuscueto/" className="flex items-center font-bold text-white rounded-md px-3 py-2 hover:bg-gray-700">
                            <i className="bx bxl-github text-sm mr-2"></i><span className="text-sm">GitHub</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
