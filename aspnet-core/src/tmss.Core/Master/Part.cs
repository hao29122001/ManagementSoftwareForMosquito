using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace tmss.Master
{
    [Table("Part")]
    public class Part : FullAuditedEntity<long>, IEntity<long>
    {
       
        [StringLength(50)]
        public virtual string PartNo { get; set; }

        [StringLength(50)]
        public virtual string PartName { get; set; }


        [StringLength(50)]
        public virtual string ModuleNo { get; set; }

        [StringLength(50)]
        public virtual string Supplier { get; set; }

        [StringLength(50)]
        public virtual string Renban { get; set; }

        [StringLength(50)]
        public virtual string Status { get; set; }


    }
}
