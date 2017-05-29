import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import { Icon } from 'components/baseline'

export const Button = props => {

  const {
    children,
    className,
    danger,
    full,
    href,
    icon,
    to,
    primary,
    link,
    large,
    nav,
    onClick,
    success,
    user

  } = props;

  const styles = classNames({
    Button: true,
    [classNames]: className,
    danger,
    link,
    large,
    full,
    navigation: nav,
    noLabel: !children,
    success,
    user,
    primary
  });

  console.log(props)

  if (to) {
    return (
      <Link
        className={styles}
        to={to}
        onClick={onClick}>
        {icon && <Icon name={icon} size={12} />}{children}
      </Link>
    )
  } else if (href) {
    return (
      <a
        href={href}
        className={styles}
        onClick={onClick}>
        {icon && <Icon name={icon} size={12} />}{children}
      </a>
    )
  }
  else {
    return (
      <button
        href={href}
        className={styles}
        onClick={onClick}>
        {icon && <Icon name={icon} size={12} />}{children}
      </button>
    )
  }
}

Button.defaultProps = {
  children: null,
  href: null,
  icon: null,
  to: null,
  primary: false,
  link: false,
  large: false,
  nav: false,
  user: false,
  full: false,
}
