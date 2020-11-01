import yfinance as yf
import csv
import sys

headers = [ 'ticker',
	u'sector',
 u'trailingPE',
 u'sharesPercentSharesOut', 
 u'regularMarketVolume', 
 u'averageVolume10days',
 u'enterpriseToEbitda', 
 u'earningsQuarterlyGrowth', 
 u'longBusinessSummary', 
 u'logo_url', 
 u'profitMargins',
 u'priceToSalesTrailing12Months',
 u'payoutRatio',
 u'country', 
 u'industry', 
 u'marketCap',
 u'bookValue',
 u'trailingEps',
 u'dividendRate', 
 u'priceToBook', 
 u'beta'
]


# with open('1-10022.json', 'w') as fp:
#     json.dump(result, fp)
fn = "all.csv"

try:
    with open(fn, 'w') as csvfile:
		writer = csv.DictWriter(csvfile, fieldnames=headers, delimiter=',', quoting=csv.QUOTE_ALL)
		writer.writeheader()

		i = 1
		for line in sys.stdin:
			if  i == 420:
				break
		
			line = line.strip().replace(".", "")
			sys.stderr.write("{} ({})\n".format(line, i))
			i += 1
			tmp = yf.Ticker(line)
			try:
				data = tmp.info
			except:
				continue
			print(data)
			o = {}
			print()
			for h in headers:
				try:
					if h == "ticker":
						continue

					if h == "industry" or h == "longBusinessSummary":
						o[h] = data[h].encode("utf8")
						continue	
				
					o[h] = data[h]
				except KeyError:
					continue
			o["ticker"] = line
			print(o)
			writer.writerow(o)
			
			
except IOError:
    print("I/O error")
