import {AiFillCheckCircle} from 'react-icons/ai'

import {MdInfo, MdWarning} from 'react-icons/md'

import {RiErrorWarningFill} from 'react-icons/ri'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <div className="icon-header-description">
        <div className="icon-header-container">
          <AiFillCheckCircle className="notification-icon" />
          <h1 className="notification-header success">Success</h1>
        </div>
        <p className="notification-description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <div className="icon-header-description">
        <div className="icon-header-container">
          <RiErrorWarningFill className="notification-icon error" />
          <h1 className="notification-header error">Error</h1>
        </div>

        <p className="notification-description ">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <div className="icon-header-description">
        <div className="icon-header-container">
          <MdWarning className="notification-icon warning" />
          <h1 className="notification-header warning">Warning</h1>
        </div>

        <p className="notification-description ">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <div className="icon-header-description">
        <div className="icon-header-container">
          <MdInfo className="notification-icon info" />
          <h1 className="notification-header info">Info</h1>
        </div>

        <p className="notification-description ">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="alert-notifications-container">
      <div className="responsive-container">
        <h1 className="header">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications
