'use client';

import type { Swiper as SwiperT } from 'swiper/types';
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PRODUCTS } from '@/shared/consts/catalog';
import { Navigation } from 'swiper/modules';
import { CatalogCard } from './catalog.card';

import 'swiper/css/navigation';
import './catalog.scss';
import 'swiper/css';

export function Catalog() {
	const sliderRef = useRef<SwiperT | null>(null);

	const [tab, setTab] = useState(0);

	useEffect(() => {
		if (sliderRef.current) {
			sliderRef.current.slideTo(0);
		}
	}, [tab]);

	return (
		<section className='catalog container' id='catalog'>
			<h1 className='catalog__title'>Каталог со всеми категориями нашего ассортимента</h1>
			<div className='catalog__header'>
				<div className='catalog__categories'>
					<div
						className={tab == 0 ? 'catalog__category active' : 'catalog__category'}
						data-category='0'
					>
						<div className='catalog__category-info'>
							<div className='catalog__category-info-wrapper'>
								<svg
									width='18'
									height='17'
									viewBox='0 0 18 17'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='catalog__category-info-icon'
								>
									<path
										d='M9.05762 0.54187C7.45065 0.54187 5.87976 1.01839 4.54361 1.91118C3.20746 2.80397 2.16606 4.07292 1.5511 5.55757C0.936138 7.04222 0.775236 8.67588 1.08874 10.252C1.40225 11.8281 2.17608 13.2758 3.31238 14.4121C4.44868 15.5484 5.89642 16.3222 7.47251 16.6357C9.04861 16.9493 10.6823 16.7884 12.1669 16.1734C13.6516 15.5584 14.9205 14.517 15.8133 13.1809C16.7061 11.8447 17.1826 10.2738 17.1826 8.66687C17.1803 6.51268 16.3236 4.44738 14.8003 2.92414C13.2771 1.4009 11.2118 0.544145 9.05762 0.54187ZM8.43262 4.91687C8.43262 4.75111 8.49847 4.59214 8.61568 4.47493C8.73289 4.35772 8.89186 4.29187 9.05762 4.29187C9.22338 4.29187 9.38235 4.35772 9.49956 4.47493C9.61677 4.59214 9.68262 4.75111 9.68262 4.91687V9.29187C9.68262 9.45763 9.61677 9.6166 9.49956 9.73381C9.38235 9.85102 9.22338 9.91687 9.05762 9.91687C8.89186 9.91687 8.73289 9.85102 8.61568 9.73381C8.49847 9.6166 8.43262 9.45763 8.43262 9.29187V4.91687ZM9.05762 13.0419C8.8722 13.0419 8.69094 12.9869 8.53677 12.8839C8.3826 12.7809 8.26244 12.6344 8.19148 12.4631C8.12053 12.2918 8.10196 12.1033 8.13813 11.9215C8.17431 11.7396 8.2636 11.5726 8.39471 11.4415C8.52582 11.3103 8.69287 11.2211 8.87472 11.1849C9.05658 11.1487 9.24508 11.1673 9.41638 11.2382C9.58769 11.3092 9.73411 11.4294 9.83712 11.5835C9.94014 11.7377 9.99512 11.9189 9.99512 12.1044C9.99512 12.353 9.89635 12.5915 9.72053 12.7673C9.54472 12.9431 9.30626 13.0419 9.05762 13.0419Z'
										fill='white'
									/>
								</svg>
								<div className='catalog__category-info-texts'>
									<p className='catalog__category-info-name'>
										удлинители с медным кабелем «ПВС»
									</p>
									<p className='catalog__category-info-subtitle'>
										нажмите, чтобы перейти
									</p>
								</div>
							</div>
						</div>
						<button
							className='catalog__category-button'
							onClick={() => {
								setTab(0);
							}}
						>
							УПВС
						</button>
					</div>
					<div
						className={tab == 1 ? 'catalog__category active' : 'catalog__category'}
						data-category='1'
					>
						<div className='catalog__category-info'>
							<div className='catalog__category-info-wrapper'>
								<svg
									width='18'
									height='17'
									viewBox='0 0 18 17'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='catalog__category-info-icon'
								>
									<path
										d='M9.05762 0.54187C7.45065 0.54187 5.87976 1.01839 4.54361 1.91118C3.20746 2.80397 2.16606 4.07292 1.5511 5.55757C0.936138 7.04222 0.775236 8.67588 1.08874 10.252C1.40225 11.8281 2.17608 13.2758 3.31238 14.4121C4.44868 15.5484 5.89642 16.3222 7.47251 16.6357C9.04861 16.9493 10.6823 16.7884 12.1669 16.1734C13.6516 15.5584 14.9205 14.517 15.8133 13.1809C16.7061 11.8447 17.1826 10.2738 17.1826 8.66687C17.1803 6.51268 16.3236 4.44738 14.8003 2.92414C13.2771 1.4009 11.2118 0.544145 9.05762 0.54187ZM8.43262 4.91687C8.43262 4.75111 8.49847 4.59214 8.61568 4.47493C8.73289 4.35772 8.89186 4.29187 9.05762 4.29187C9.22338 4.29187 9.38235 4.35772 9.49956 4.47493C9.61677 4.59214 9.68262 4.75111 9.68262 4.91687V9.29187C9.68262 9.45763 9.61677 9.6166 9.49956 9.73381C9.38235 9.85102 9.22338 9.91687 9.05762 9.91687C8.89186 9.91687 8.73289 9.85102 8.61568 9.73381C8.49847 9.6166 8.43262 9.45763 8.43262 9.29187V4.91687ZM9.05762 13.0419C8.8722 13.0419 8.69094 12.9869 8.53677 12.8839C8.3826 12.7809 8.26244 12.6344 8.19148 12.4631C8.12053 12.2918 8.10196 12.1033 8.13813 11.9215C8.17431 11.7396 8.2636 11.5726 8.39471 11.4415C8.52582 11.3103 8.69287 11.2211 8.87472 11.1849C9.05658 11.1487 9.24508 11.1673 9.41638 11.2382C9.58769 11.3092 9.73411 11.4294 9.83712 11.5835C9.94014 11.7377 9.99512 11.9189 9.99512 12.1044C9.99512 12.353 9.89635 12.5915 9.72053 12.7673C9.54472 12.9431 9.30626 13.0419 9.05762 13.0419Z'
										fill='white'
									/>
								</svg>
								<div className='catalog__category-info-texts'>
									<p className='catalog__category-info-name'>
										удлинители с медным кабелем «КГТП ХЛ»
									</p>
									<p className='catalog__category-info-subtitle'>
										нажмите, чтобы перейти
									</p>
								</div>
							</div>
						</div>
						<button
							className='catalog__category-button'
							onClick={() => {
								setTab(1);
							}}
						>
							УКГТП ХЛ
						</button>
					</div>
				</div>
				<div className='catalog__nav'>
					<svg
						width='26'
						height='26'
						viewBox='0 0 26 26'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='catalog__prev-icon'
					>
						<path
							d='M13 0.8125C10.5895 0.8125 8.23322 1.52728 6.22899 2.86646C4.22477 4.20564 2.66267 6.10907 1.74022 8.33604C0.817781 10.563 0.576428 13.0135 1.04668 15.3777C1.51694 17.7418 2.67769 19.9134 4.38214 21.6179C6.08659 23.3223 8.2582 24.4831 10.6223 24.9533C12.9865 25.4236 15.437 25.1822 17.664 24.2598C19.8909 23.3373 21.7944 21.7752 23.1335 19.771C24.4727 17.7668 25.1875 15.4105 25.1875 13C25.1841 9.76872 23.899 6.67076 21.6141 4.3859C19.3292 2.10104 16.2313 0.815912 13 0.8125ZM16.4758 13.6633L11.7883 18.3508C11.7012 18.4379 11.5978 18.507 11.484 18.5541C11.3702 18.6013 11.2482 18.6255 11.125 18.6255C11.0018 18.6255 10.8798 18.6013 10.766 18.5541C10.6522 18.507 10.5488 18.4379 10.4617 18.3508C10.3746 18.2637 10.3055 18.1603 10.2584 18.0465C10.2112 17.9327 10.187 17.8107 10.187 17.6875C10.187 17.5643 10.2112 17.4423 10.2584 17.3285C10.3055 17.2147 10.3746 17.1113 10.4617 17.0242L14.4871 13L10.4617 8.97578C10.2858 8.79987 10.187 8.56128 10.187 8.3125C10.187 8.06372 10.2858 7.82513 10.4617 7.64922C10.6376 7.4733 10.8762 7.37448 11.125 7.37448C11.3738 7.37448 11.6124 7.4733 11.7883 7.64922L16.4758 12.3367C16.563 12.4238 16.6321 12.5272 16.6793 12.641C16.7265 12.7548 16.7507 12.8768 16.7507 13C16.7507 13.1232 16.7265 13.2452 16.6793 13.359C16.6321 13.4728 16.563 13.5762 16.4758 13.6633Z'
							fill='#FF3D00'
						/>
					</svg>
					<svg
						width='26'
						height='26'
						viewBox='0 0 26 26'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='catalog__next-icon'
					>
						<path
							d='M13 0.8125C10.5895 0.8125 8.23322 1.52728 6.22899 2.86646C4.22477 4.20564 2.66267 6.10907 1.74022 8.33604C0.817781 10.563 0.576428 13.0135 1.04668 15.3777C1.51694 17.7418 2.67769 19.9134 4.38214 21.6179C6.08659 23.3223 8.2582 24.4831 10.6223 24.9533C12.9865 25.4236 15.437 25.1822 17.664 24.2598C19.8909 23.3373 21.7944 21.7752 23.1335 19.771C24.4727 17.7668 25.1875 15.4105 25.1875 13C25.1841 9.76872 23.899 6.67076 21.6141 4.3859C19.3292 2.10104 16.2313 0.815912 13 0.8125ZM16.4758 13.6633L11.7883 18.3508C11.7012 18.4379 11.5978 18.507 11.484 18.5541C11.3702 18.6013 11.2482 18.6255 11.125 18.6255C11.0018 18.6255 10.8798 18.6013 10.766 18.5541C10.6522 18.507 10.5488 18.4379 10.4617 18.3508C10.3746 18.2637 10.3055 18.1603 10.2584 18.0465C10.2112 17.9327 10.187 17.8107 10.187 17.6875C10.187 17.5643 10.2112 17.4423 10.2584 17.3285C10.3055 17.2147 10.3746 17.1113 10.4617 17.0242L14.4871 13L10.4617 8.97578C10.2858 8.79987 10.187 8.56128 10.187 8.3125C10.187 8.06372 10.2858 7.82513 10.4617 7.64922C10.6376 7.4733 10.8762 7.37448 11.125 7.37448C11.3738 7.37448 11.6124 7.4733 11.7883 7.64922L16.4758 12.3367C16.563 12.4238 16.6321 12.5272 16.6793 12.641C16.7265 12.7548 16.7507 12.8768 16.7507 13C16.7507 13.1232 16.7265 13.2452 16.6793 13.359C16.6321 13.4728 16.563 13.5762 16.4758 13.6633Z'
							fill='#FF3D00'
						/>
					</svg>
				</div>
			</div>
			<div className='catalog__cards swiper'>
				<div className='catalog__cards-wrapper swiper-wrapper'>
					<Swiper
						loop={PRODUCTS.length > 0}
						spaceBetween={20}
						modules={[Navigation]}
						slidesPerView={1}
						width={350}
						breakpoints={{ 820: { slidesPerView: 3, width: 1180 } }}
						className='catalog__cards'
						wrapperClass='catalog__cards-wrapper'
						navigation={{
							enabled: true,
							nextEl: '.catalog__next-icon',
							prevEl: '.catalog__prev-icon',
						}}
						onSwiper={swiper => {
							sliderRef.current = swiper;
						}}
					>
						{PRODUCTS[tab].items.map((product, i) => {
							return (
								<SwiperSlide
									key={`catalog-card-${product.title}-${i}`}
									className='catalog__card'
								>
									<CatalogCard
										// @ts-expect-error
										product={product}
										// @ts-expect-error
										items={PRODUCTS[tab].items}
										index={i}
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
