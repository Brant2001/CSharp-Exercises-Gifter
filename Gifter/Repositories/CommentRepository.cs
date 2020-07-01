using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Gifter.Data;
using Gifter.Models;

namespace Gifter.Repositories
{
    public class CommentRepository
    {
        private readonly ApplicationDbContext _context;

        public CommentRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Comment> GetAll()
        {
            // Using a .ThenInclude() method with a .Include() method
            return _context.Comment // We get all comments
                .Include(c => c.UserProfile) // We Include the user information as it relates to the comment
                .Include(c => c.Post) // We Include the Post information as it relates to the comment
                .ThenInclude(p => p.UserProfile) // Then we include the user information as it relates to the post
                .ToList(); // Then we list it.
            // The order in which this occurs is important. 
            // Think of the Comment as the main/parent object and User profile and Post as items/children on it.
            // If we want to include information about a F.K. (Forein Key) Object on the main object we just use Include().
            // If we want to include information about a F.K. on one of these children objects we use ThenInclude().
            // This must be used directly after the Include() is used for the desired child. It is including what could be considered a granchild.

        }

        public Comment GetById(int id)
        {
            return _context.Comment
                .Include(c => c.UserProfile)
                .Include(c => c.Post)
                .ThenInclude(p => p.UserProfile)
                .FirstOrDefault(c => c.Id == id);
        }

        public List<Comment> GetByPostId(int id)
        {
            return _context.Comment
                            .Include(c => c.Post)
                            .ThenInclude(p => p.UserProfile)
                            .Include(c => c.UserProfile)
                            .Where(c => c.PostId == id)
                            .OrderBy(c => c.Message)
                            .ToList();
        }

        public void Add(Comment comment)
        {
            _context.Add(comment);
            _context.SaveChanges();
        }

        public void Update(Comment comment)
        {
            _context.Entry(comment).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var comment = GetById(id);
            _context.Comment.Remove(comment);
            _context.SaveChanges();
        }
    }
}