import { Illustration } from "./illustration";
import { Footer } from "./footer";

export function PageData({ data }: { data: any }) {
  const date = new Date().toISOString();
  return (
    <>
      <main>
        
        <h1>SynergyCode</h1>
        <p className="description">
          This is a ChatGPT Plugin to get the weather of any given location by SynergyCode Thanks for watching.
        </p>
        <Illustration />
        <div className="meta">
          <div className="info">
            <span>Your Location</span>
            <span className="region">
              <strong>{data.location.name}</strong>
            </span>
          </div>
          <div className="info">
            <span>Current Temperature</span>
            <strong>
              {data.current.temp_c}°C / {data.current.temp_f}°F
            </strong>
          </div>
        </div>
      </main>

      <Footer>
        <p>
          Generated at {date} by{" "}
          <a
            href="https://synergycode.tech"
            target="_blank"
            rel="noreferrer"
          >
            SynergyCode.tech
          </a>
        </p>
      </Footer>
    </>
  );
}
