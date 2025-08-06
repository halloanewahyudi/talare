export const useStickyNavbar = () => {
  const isSticky = useState<boolean>('navbar-sticky', () => false)
  return { isSticky }
}
