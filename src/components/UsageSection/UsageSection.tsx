import React, { useState, useEffect } from 'react';
import { Button } from '@rescui/button';
import { useTextStyles } from '@rescui/typography';
import { cardCn } from '@rescui/card';
import { ThemeProvider } from '@rescui/ui-contexts';
import cn from 'classnames';

import { Container, Section } from "../Layout/Layout";

import { testimonials } from './data';

import styles from './UsageSection.module.scss';

function UsageSectionContent() {
	const textCn = useTextStyles();

	const [sortByName, setSortByName] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const savedOrder = localStorage.getItem('kotlin-testimonials-order');
			setSortByName(savedOrder === 'name');
		}
	}, []);

	const sortedTestimonials = sortByName
		? [...testimonials].sort((a, b) => a.company.localeCompare(b.company))
		: testimonials;

	const handleSortClick = () => {
		const next = !sortByName;
		setSortByName(next);
		if (typeof window !== 'undefined') {
			localStorage.setItem('kotlin-testimonials-order', next ? 'name' : 'default');
		}
	};

	return (
		<Section className={styles.usageSection}>
			<Container>
				<h2 className={textCn('rs-hero')}>Kotlin Usage Highlights</h2>
				<div className="kto-offset-top-16" style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Button
						mode="outline"
						size="s"
						onClick={handleSortClick}
					>
						Sort: {sortByName ? 'A-Z' : 'Default'}
					</Button>
				</div>
				<div className="kto-grid kto-grid-gap-16 kto-offset-top-48">
					{sortedTestimonials.map((item, index) => (
						<a
							key={index}
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								cardCn({ theme: 'light', mode: 'classic', isClickable: true }),
								styles.card,
								'kto-col-4 kto-col-md-6 kto-col-sm-12'
							)}
						>
							<img
								src={item.logo}
								alt={item.company}
								className={cn(styles.logo, {
									[styles.logo_spring]: item.company === 'Spring'
								})}
							/>
							<p className={cn(textCn('rs-text-2'), 'kto-offset-top-8')}>{item.text}</p>
						</a>
					))}
				</div>
			</Container>
		</Section>
	);
}

export function UsageSection() {
	return (
		<ThemeProvider theme="light">
			<UsageSectionContent />
		</ThemeProvider>
	);
}	