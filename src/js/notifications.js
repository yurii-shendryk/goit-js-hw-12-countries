import { defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import { error } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

defaults.maxTextHeight = null;

const errorMessage = () =>
  error({
    text: 'Too many matches found. Please enter a more specific query!',
  });

export default errorMessage;
