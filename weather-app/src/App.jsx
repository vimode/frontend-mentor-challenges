function App() {
	return (
		<div>
			<a
				href="#main"
				className="absolute left-0 text-midnight-neutral-0 underline text-xl sr-only focus:not-sr-only"
			>
				Skip to main
			</a>
			<header className="flex justify-between items-center">
				<img src="/assets/images/logo.svg" />
				<div>units</div>
			</header>
			<div>
				<h1>How's the sky looking today?</h1>
				<main id="main">
					<div role="search">
            <div>
              <input role="search"/>
              <button>Search</button>
            </div>
          </div>
					<section>Current Weather</section>
          <section>Current Weather details</section>
          <section>Daily forecast</section>
          <section>Hourly forecast</section>
				</main>
			</div>
		</div>
	);
}

export default App;
