import XLSX from 'xlsx';

XLSX.utils.sanitize_sheet_name = function(string) {
	return `${string}`.replace(/[:\\/?*[\]]/g, '').slice(0, 31);
};
