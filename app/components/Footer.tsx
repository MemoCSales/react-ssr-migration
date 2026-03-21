import React from 'react';
import '../styles/footer.scss';

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__section">
					<h3 className="footer__heading">Product</h3>
					<ul className="footer__list">
						<li>
							<a href="/docs" className="footer__link">
								Documentation
							</a>
						</li>
						<li>
							<a href="/docs/getting-started.html" className="footer__link">
								Getting Started
							</a>
						</li>
						<li>
							<a href="/docs/multiplatform.html" className="footer__link">
								Multiplatform
							</a>
						</li>
						<li>
							<a href="/lp/server-side/" className="footer__link">
								Server-side
							</a>
						</li>
					</ul>
				</div>

				<div className="footer__section">
					<h3 className="footer__heading">Community</h3>
					<ul className="footer__list">
						<li>
							<a href="/community/" className="footer__link">
								Community
							</a>
						</li>
						<li>
							<a
								href="https://slack.kotlinlang.org/"
								className="footer__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								Slack
							</a>
						</li>
						<li>
							<a
								href="https://discuss.kotlinlang.org/"
								className="footer__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								Forum
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com/kotlinlang"
								className="footer__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								Twitter
							</a>
						</li>
					</ul>
				</div>

				<div className="footer__section">
					<h3 className="footer__heading">More</h3>
					<ul className="footer__list">
						<li>
							<a
								href="https://github.com/JetBrains/kotlin"
								className="footer__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</li>
						<li>
							<a
								href="https://youtrack.jetbrains.com/issues/KT"
								className="footer__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								Issue Tracker
							</a>
						</li>
						<li>
							<a href="/blog/" className="footer__link">
								Blog
							</a>
						</li>
						<li>
							<a
								href="https://www.jetbrains.com"
								className="footer__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								JetBrains
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="footer__bottom">
				<div className="footer__copyright">
					<p>
						© {currentYear} <a href="https://www.jetbrains.com">JetBrains</a>. All rights reserved.
					</p>
				</div>
				<div className="footer__legal">
					<a href="https://www.jetbrains.com/legal/" className="footer__legal-link">
						Legal
					</a>
					<a href="https://www.jetbrains.com/privacy/" className="footer__legal-link">
						Privacy
					</a>
					<a href="https://www.jetbrains.com/legal/websites-terms-of-use/" className="footer__legal-link">
						Terms of Use
					</a>
				</div>
			</div>
		</footer>
	);
}
