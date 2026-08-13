import type { Metadata } from 'next'
import RestaurantsPageContent from './RestaurantsPageContent'

export const metadata: Metadata = {
  title: 'Digital Solutions for Restaurants | YSM Technologies',
  description: 'Custom websites, digital menus, and online ordering systems designed specifically for restaurants, cafes, and food businesses.',
}

export default function RestaurantsLandingPage() {
  return <RestaurantsPageContent />
}
