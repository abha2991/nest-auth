import { HomeOutlined, PeopleOutlined } from '@mui/icons-material'
import { alpha, Button as MuiButton, ButtonProps, styled, SvgIconProps, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import clsx from 'clsx'
import { ComponentType, FC } from 'react'
import { Link as BaseLink } from 'react-router-dom'
import useRouteMatch from '../../hooks/useRouteMatch'

export type MenuItem = ButtonProps<'button'> & {
  icon: ComponentType<SvgIconProps>
  title?: string
  to?: string
}

const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: HomeOutlined,
    to: '/'
  },
  {
    title: 'Users',
    icon: PeopleOutlined,
    to: '/users'
  }
]

const routes = menuItems.filter((item) => item.to).map((item) => item.to!)

const Button = styled(MuiButton)(({ theme }) => ({
  flexDirection: 'column',
  textTransform: 'none',
  padding: theme.spacing(1.5),
  borderRadius: 8,
  color: theme.palette.text.disabled,
  '&.active, &:hover': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.1)
  }
}))

const RenderNavItem: FC<MenuItem & { active?: boolean }> = ({ active, icon: Icon, title, to, ...buttonProps }) => {
  const ariaCurrent = active ? 'page' : undefined

  return (
    <Box px={1.5} py={0.5}>
      <Button
        variant="text"
        fullWidth
        {...buttonProps}
        {...(to
          ? {
              'aria-current': ariaCurrent,
              to,
              component: BaseLink,
              className: clsx(active && 'active')
            }
          : {})}
      >
        <Icon color="inherit" />
        {title && (
          <Typography color="text.primary" mt={0.25} variant="body2">
            {title}
          </Typography>
        )}
      </Button>
    </Box>
  )
}

const NavMenu: FC = () => {
  const routeMatch = useRouteMatch(routes)
  const currentTab = routeMatch?.pattern?.path

  return (
    <Box pt={9} pb={1} display="flex" flexDirection="column" height="100%">
      <Box flex={1} overflow="auto">
        {menuItems.map((navItem, index) => (
          <RenderNavItem {...navItem} active={Boolean(navItem.to && currentTab === navItem.to)} key={index} />
        ))}
      </Box>
    </Box>
  )
}

export default NavMenu
