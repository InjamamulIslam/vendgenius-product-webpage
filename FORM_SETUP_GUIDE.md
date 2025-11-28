# Free Form Submission Setup Guide

## Option 1: Web3Forms (Recommended - Easiest)

**100% FREE** - No credit card required, unlimited submissions

### Steps:
1. Go to **https://web3forms.com**
2. Click "Get Started Free"
3. Enter your email: **olelectronics.in@gmail.com**
4. Verify your email
5. Copy your Access Key
6. Open `src/components/DemoForm.tsx`
7. Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your actual key (line 43)

**That's it!** Form submissions will be sent to olelectronics.in@gmail.com

---

## Option 2: Formspree (Alternative)

**FREE** - 50 submissions/month

### Steps:
1. Go to **https://formspree.io**
2. Sign up with: **olelectronics.in@gmail.com**
3. Create a new form
4. Copy your form endpoint URL
5. Update `DemoForm.tsx`:

```typescript
const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

---

## Option 3: EmailJS (Alternative)

**FREE** - 200 emails/month

### Steps:
1. Go to **https://www.emailjs.com**
2. Sign up
3. Add Email Service (Gmail)
4. Create Email Template
5. Get Public Key, Service ID, Template ID
6. Install: `npm install @emailjs/browser`
7. Update code in `DemoForm.tsx`

---

## Recommended: Web3Forms

### Why Web3Forms?
- ✅ **Completely Free** - No limits on submissions
- ✅ **No Registration** - Just email verification
- ✅ **Easy Setup** - 2-minute integration
- ✅ **Spam Protection** - Built-in
- ✅ **Email Notifications** - Instant
- ✅ **No Dependencies** - Pure fetch API
- ✅ **File Uploads** - Supported
- ✅ **Custom Fields** - All included

### Current Implementation:
The form is already set up to use Web3Forms. Just add your access key!

**Email notifications will include:**
- Name
- Email
- Phone
- Company (optional)
- Location
- Message

---

## Testing

After setup:
1. Fill out the form on your website
2. Submit
3. Check **olelectronics.in@gmail.com** inbox
4. You should receive an email with all form details

---

## Troubleshooting

**Not receiving emails?**
- Check spam/junk folder
- Verify access key is correct
- Check Web3Forms dashboard for delivery status
- Ensure email olelectronics.in@gmail.com is verified

**Form not submitting?**
- Check browser console for errors
- Verify internet connection
- Check Web3Forms API status

---

## Need Help?

Contact Web3Forms support or check their documentation at:
https://docs.web3forms.com
