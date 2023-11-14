# Installation

Assuming you are done installing Firefox(legacy version).
If not please check README.md

1. Open Firefox
2. Drag and drop imacros_for_firefox-8.9.7-fx.xpi
3. Click “Add” on the upper-right pop-up. 

![add](https://github.com/chaomein123/AutoSwertres/blob/main/Screenshots/1.JPG)

4. Restart Firefox.
5. You should be able to see the iMacros at the left side of the browser.

![imacros](https://github.com/chaomein123/AutoSwertres/blob/main/Screenshots/2.JPG)

6. Don't worry if you don't see Auto-lotto, I'ved already added mine.
7. Go to folder: ..\Documents\iMacros\Macros
8. You should be able to see Demo-Firefox, you can delete that or just ignore that file.
9. Get the folder from REPO: ..\Required Files\Auto-Lotto copy and paste it on ..\Documents\iMacros\Macros
10. Check Firefox and iMacros tool if Auto-Lotto is added.


# How to run the app
### Note that this app can only return one(1) month at a time
### This is my unfinished project last 2016, and I don't anticipate updating it. I'm building this just for fun, so regular updates might not be a priority.
### If I will update this code maybe I will go with Playwright C# automation.

1. Open Firefox and navigate iMacros.
2. Navigate to Auto-Lotto\AutoSwertres.js
3. RIGHT CLICK on AutoSwertres.js and click 'Edit Macro'.
4. It should open AutoSwertres.js - iMacros Editor
5. Navigate to line 7 - var year_month = "2023-09";

![js](https://github.com/chaomein123/AutoSwertres/blob/main/Screenshots/3.JPG)

6. Change the value of the month of your choice to generate CSV.
	e.g. For july 2019 then it should be "2019-07"
7. Don't remove the quotation mark("")
8. Save and close.
9. Click Play on iMacros. Now it will open a website and get the data.

![play](https://github.com/chaomein123/AutoSwertres/blob/main/Screenshots/4.JPG)

	Don't worry if the console says Broken! or etc. It should still generate csv file.
10. Navigate to your folder: ..\Documents\iMacros\Downloads
	You should be able to see "swertres_auto.csv" file.
11. Done you can copy and paste it to your main file.
	Take note double check the dates, if there are duplicates.
	If you can see 2 digits only, that means it has a 0 on the first digit.

![play](https://github.com/chaomein123/AutoSwertres/blob/main/Screenshots/5.JPG)

#### NOTE: You are done executing the app. BUT if you ran it again make sure to close the CSV file. It will append the records from the old CSV. So if you want to have a clear file, then just delete the "swertres_auto.csv" each time you generate CSV.
