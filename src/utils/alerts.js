import {Alert} from 'react-native';
import Toast from 'react-native-toast-message';

/**
 * Show alert with two action buttons
 * @param title: Title of the alert
 * @param message: Message of the alert
 * @param positiveText: Positive button text
 * @param positiveAction: Position button callback action
 * @param negativeText: Negative button text
 * @param negativeAction: Negative button callback action
 */
export const alertWithTwoButtons = (
  title,
  message,
  positiveText,
  positiveAction,
  negativeText,
  negativeAction,
) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: negativeText,
        onPress: () => {
          negativeAction();
        },
      },
      {
        text: positiveText,
        onPress: () => {
          positiveAction();
        },
      },
    ],
    {cancelable: false},
  );
};

/**
 * Show alert with one action button
 * @param title: Title of the alert
 * @param message: Message of the alert
 * @param positiveText: button text
 * @param positiveAction: Button callback action
 */
export const alertWithOneButton = (
  title,
  message,
  positiveText,
  positiveAction,
) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: positiveText,
        onPress: () => {
          positiveAction();
        },
      },
    ],
    {cancelable: false},
  );
};

export const showToastWithGravity = message => {
  Toast.show({
    type: 'error',
    text1: message,
    position: 'top',
  });
};

export const showAccessToast = message => {
  Toast.show({
    type: 'success',
    text1: message,
    position: 'top',
  });
};
