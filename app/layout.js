// import './global.css'

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <div className="wrap">
            <header>
                <h1>헤더</h1>
            </header>
            {children}
            <footer>
              <h1>푸터</h1>
            </footer>
          </div>
        </body>
      </html>
    )
  }