import {Alert} from 'react-native';
import {
  startCheckoutAsync,
  CheckoutErrorCancelled,
  CheckoutErrorSdkNotAuthorized,
  UsageError,
} from 'react-native-square-reader-sdk';

export default () => {
  const checkout = async (total, emptyTerm, emptyCart, navigation) => {
    const checkoutParams = {
      amountMoney: {
        amount: total,
        currencyCode: 'USD', // optional, use authorized location's currency code by default
      },
      // Optional for all following configuration
      skipReceipt: false,
      collectSignature: true,
      allowSplitTender: false,
      delayCapture: false,
      note: 'ReaderSDKSample Transaction',
      tipSettings: {
        showCustomTipField: true,
        showSeparateTipScreen: false,
        tipPercentages: [15, 20, 30],
      },
      additionalPaymentTypes: ['cash', 'manual_card_entry'],
    };

    try {
      const checkoutResult = await startCheckoutAsync(checkoutParams);
      // checkout finished successfully and checkoutResult is available
      emptyTerm();
      emptyCart();
      navigation.goBack();
    } catch (ex) {
      switch (ex.code) {
        case CheckoutErrorCancelled:
          // Handle canceled transaction here
          break;
        case CheckoutErrorSdkNotAuthorized:
          // Handle sdk not authorized
          break;
        default:
          let errorMessage = ex.message;
          if (__DEV__) {
            errorMessage += `\n\nDebug Message: ${ex.debugMessage}`;
            console.log(`${ex.code}:${ex.debugCode}:${ex.debugMessage}`);
          }
          /*           Alert.alert('Error', errorMessage); */
          break;
      }
    }
  };
  return checkout;
};
