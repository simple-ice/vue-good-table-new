import dateType from '@/components/types/date'

describe('date type', () => {
  describe('compare', () => {
    it('should compare dates correctly', () => {
      expect(dateType.compare('2000-12-11', '2000-11-12')).toEqual(1)
    })

    it('should compare dates correctly with custom format', () => {
      expect(dateType.compare('20001211', '20001112', {dateInputFormat: 'yyyyddMM'})).toEqual(-1)
    })

    it('should compare null date as epoch', () => {
      expect(dateType.compare('20001211', undefined, {dateInputFormat: 'yyyyddMM'})).toEqual(1)
    })

    it('should compare null date as epoch', () => {
      expect(dateType.compare(undefined, '20001211', {dateInputFormat: 'yyyyddMM'})).toEqual(-1)
    })
  })

  describe('format', () => {
    it('should format dates correctly', () => {
      expect(dateType.format('20001012', {dateInputFormat: 'yyyyddMM', dateOutputFormat: 'do MMM yyyy'})).toEqual('10th Dec 2000')
    })

    it('should format dates correctly', () => {
      expect(dateType.format('20001012', {dateInputFormat: 'yyyyMMdd', dateOutputFormat: 'do MMM yyyy'})).toEqual('12th Oct 2000')
    })
  })
})
