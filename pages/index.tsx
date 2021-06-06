import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Upward</title>
        <meta name="description" content="Advancing women in tech" />
      </Head>

      <div className="page-margin-top">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <img src="/girl.png" width="100%" alt="upward-logo"></img>
            </div>

            <div className="col-lg">
              <h1 className="title" style={{ marginTop: 40 }}>
                Upward
              </h1>
              <p>
                Our mission is to advance women in tech. We provide this
                platform to help you land an awesome role!
              </p>
              <h4>Find Your Next Role</h4>
              <p>
                Request to get connected directly with hiring managers at fast
                growing, inclusive and diverse startups and request to be part
                of a study group.
              </p>

              <div>
                <a href="https://forms.gle/bXWayRQiW6V5UJxE6" target="_blank">
                  <button type="button" className="btn btn-secondary">
                    Sign Up
                  </button>
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdC-AbV2SNhMS99yhY6r4Gu34UC9DhVWIM7utII6irV1pyaSw/viewform"
                  target="_blank">
                  <button
                    style={{ marginLeft: 10 }}
                    type="button"
                    className="btn btn-secondary">
                    Connect Form
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
