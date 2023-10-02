﻿using Abp.Application.Services.Dto;
using Abp.Domain.Entities;

namespace tmss.Master.Pc
{ 
    public class PcStoreDto : Entity<long>
    {
        public string PartNo { get; set; }

        public string PartName { get; set; }
     
    }
    public class PcStoreInputDto :PagedAndSortedResultRequestDto
    {
    
        public string PartNo { get; set; }

        public string PartName { get; set; }

    }
}
