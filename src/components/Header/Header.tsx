import React from 'react';
import './Header.scss';

interface HeaderProps {
	currentUrl?: string;
}

export function Header({ currentUrl }: HeaderProps) {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logo">
					<a href="/" className="header__logo-link">
						<svg viewBox="0 0 100 100" width="40" height="40" className="header__logo-icon">
							<text x="50" y="70" textAnchor="middle" fontSize="60" fontWeight="bold" fill="#7f52ff">
								K
							</text>
						</svg>
						<span className="header__logo-text">Kotlin</span>
					</a>
				</div>

				<nav className="header__nav">
					<a href="/docs" className="header__nav-link">
						Documentation
					</a>
					<a href="/community" className="header__nav-link">
						Community
					</a>
					<a href="https://play.kotlinlang.org" className="header__nav-link" target="_blank" rel="noopener noreferrer">
						Playground
					</a>
				</nav>

				<div className="header__actions">
					<a
						href="https://github.com/JetBrains/kotlin"
						className="header__button header__button--secondary"
						target="_blank"
						rel="noopener noreferrer"
						title="GitHub Repository"
					>
						⭐ GitHub
					</a>
				</div>
			</div>
		</header>
	);
}
